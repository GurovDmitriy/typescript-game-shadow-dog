import Background from "./models/Background/Background"

/**
 * Game
 */
class Game implements IGame {
  private _ctx: CanvasRenderingContext2D
  private _background: Background
  private _controller
  private _runBg = false
  private _timerId = null

  constructor(ctx: CanvasRenderingContext2D, Controller) {
    this._ctx = ctx
    this._createBackground()

    this._controller = new Controller(this.runBg.bind(this))
  }

  /**
   * Run game
   */
  run() {
    if (this._runBg) {
      this._background.animate().updateSpeed(1)
    } else {
      this._background.animate().updateSpeed(0)
    }
  }

  runBg() {
    clearTimeout(this._timerId)

    this._runBg = true

    this._timerId = setTimeout(() => {
      this._runBg = false
    }, 100)
  }

  /**
   * Create background for game
   * @private
   */
  private _createBackground() {
    this._background = new Background(this._ctx)
  }
}

export interface IGame {
  run(): void
}

export default Game
