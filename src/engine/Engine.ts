import { Game } from "../game/Game"
import { Keyboard } from "./Keyboard/Keyboard"

/**
 * Engine - create engine context and game loop (singleton)
 */
export class Engine implements IEngine {
  private static _instance: Engine
  private readonly _context: IContextEngine
  private _game: Game
  private readonly loop: () => void

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

  public run() {
    this._context.ctx.clearRect(
      0,
      0,
      this._context.canvas.width,
      this._context.canvas.height,
    )

    this._game.run()

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
}

export interface IEngine {
  run(): void
}

export interface IGame {
  run(): void
}

export interface IContextEngine {
  ctx: CanvasRenderingContext2D
  canvas: HTMLCanvasElement
  keyboard: IKeyboard
}

export interface IKeyboard {
  define(
    btn: BTNType,
    action: () => void,
    after?: () => void,
    type?: TYPE_ACTION,
  ): void
}

/**
 * Types events button
 */
export enum TYPE_ACTION {
  keydown = "keydown",
  keyup = "keyup",
}

/**
 * Describe buttons
 */
export type BTNType = string | string[]
