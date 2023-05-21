import Background from "./models/Background/Background"

/**
 * Game
 */
class Game implements IGame {
  private _ctx: CanvasRenderingContext2D
  private _background: Background

  constructor(ctx: CanvasRenderingContext2D) {
    this._ctx = ctx
    this._createBackground()
  }

  /**
   * Run game
   */
  run() {
    this._background.animate()
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
