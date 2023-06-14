import { IController } from "../game/models/Controller/types"

/**
 * Engine class for run game functional
 */
class Engine implements IEngine {
  private _canvas: HTMLCanvasElement
  private _ctx: CanvasRenderingContext2D
  private _controller: IController
  private _game: IGame
  private _loop: () => void

  public constructor(Game, Controller) {
    this._createCanvas()
    this._loop = this.run.bind(this)

    this._controller = new Controller()
    this._game = new Game(this._ctx, this._controller)
  }

  /**
   * Game loop for run draw game
   */
  public run() {
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height)

    this._game.run()

    requestAnimationFrame(this._loop)
  }

  /**
   * Create canvas with params and 2d context
   */
  private _createCanvas() {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement
    if (!canvas) throw Error("Error found HTMLCanvasElement")

    const ctx = canvas.getContext("2d")

    canvas.width = 1000
    canvas.height = 600

    this._canvas = canvas
    this._ctx = ctx
  }
}

export interface IEngine {
  run(): void
}

export interface IGame {
  run(): void
}

export default Engine
