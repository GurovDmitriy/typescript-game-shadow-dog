import Game, { IGame } from "../game/Game"

/**
 * Engine class for run game functional
 */
class Engine implements IEngine {
  private _canvas: HTMLCanvasElement
  private _ctx: CanvasRenderingContext2D
  private _game: IGame
  private _loop: () => void

  public constructor(game: typeof Game) {
    this._checkCanvasElement()
    this._createCanvas()
    this._loop = this.run.bind(this)

    this._game = new game(this._ctx)
  }

  /**
   * Game loop for run draw game
   */
  public run() {
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height)

    this._game.run()

    // requestAnimationFrame(this._loop)
  }

  /**
   * Create canvas with params and 2d context
   */
  private _createCanvas() {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement
    const ctx = canvas.getContext("2d")

    canvas.width = 1000
    canvas.height = 600

    this._canvas = canvas
    this._ctx = ctx
  }

  /**
   * Check available HTMLCanvasElement
   */
  private _checkCanvasElement() {
    const canvas = document.getElementById("canvas")

    if (!canvas) throw Error("Error found HTMLCanvasElement")

    console.log("start new engine")
  }
}

export interface IEngine {
  run(): void
}

export default Engine
