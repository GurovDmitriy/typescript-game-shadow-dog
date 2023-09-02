/**
 * Engine class for run game functional
 */
class Engine implements IEngine {
  private _canvas: HTMLCanvasElement
  private _ctx: CanvasRenderingContext2D
  private _controller: IController
  private _game: IGame
  private _loop: () => void

  public constructor(Game: IGame, Controller: IController) {
    this._createCanvas()
    this._loop = this.run.bind(this)

    this._controller = Controller
    this._controller.init()

    this._game = Game
    this._game.init(this._ctx, this._controller)
  }

  public init() {
    console.log("engine init")
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
  init(): void
  run(): void
}

export interface IController {
  init(): void
  define(type: TYPE_ACTION, btn: BTN, action: () => void): void
}

export interface IGame {
  init(ctx: CanvasRenderingContext2D, controller: IController): void
  run(): void
}

/**
 * Types events button
 */
export enum TYPE_ACTION {
  keypress = "keypress",
  keydown = "keydown",
}

/**
 * Describe buttons
 */
export enum BTN {
  bntRight = "d",
  bntLeft = "a",
  bntUp = "w",
  bntDown = "s",
  arrowRight = "ArrowRight",
  arrowLeft = "ArrowLeft",
  arrowUp = "ArrowUp",
  arrowDown = "ArrowDown",
}

export default Engine
