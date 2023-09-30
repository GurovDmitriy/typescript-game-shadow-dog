import { Game } from "../game/Game"
import { Keyboard } from "./Keyboard/Keyboard"
import { IContextEngine, IEngine } from "./types"

/**
 * Engine - create engine context and game loop (singleton)
 */
export class Engine implements IEngine {
  private static _instance: Engine
  private readonly _context: IContextEngine
  private _game: Game
  private readonly loop: () => void
  private _date: number
  private _fps: number

  private constructor(
    Keyboard: { new (): Keyboard },
    Game: { new (context: IContextEngine): Game },
  ) {
    this._context = {
      ...this.createCanvas(),
      keyboard: new Keyboard(),
    }

    this.loop = this.run.bind(this)
    this._game = new Game(this._context)
    this._date = Date.now()

    this._setFps(60)
  }

  public static create(
    Keyboard: { new (): Keyboard },
    Game: { new (context: IContextEngine): Game },
  ): Engine {
    if (!Engine._instance) {
      Engine._instance = new Engine(Keyboard, Game)
    }

    return Engine._instance
  }

  private _loop() {
    this._context.ctx.clearRect(
      0,
      0,
      this._context.canvas.width,
      this._context.canvas.height,
    )

    this._game.run()
  }

  public run() {
    if (Date.now() > this._date + this._fps) {
      this._loop()

      this._date = Date.now()
    }

    requestAnimationFrame(this.loop)
  }

  private createCanvas(): {
    ctx: CanvasRenderingContext2D
    canvas: HTMLCanvasElement
  } {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement
    if (!canvas) throw Error("Error found HTMLCanvasElement")

    const ctx = canvas.getContext("2d")

    canvas.width = 1000
    canvas.height = 600

    return { ctx, canvas }
  }

  private _setFps(fps: number) {
    const f = Math.floor(1000 / fps)

    this._fps = f > 10 ? f : 0
  }
}
