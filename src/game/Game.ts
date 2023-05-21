import Background from "./models/Background/Background"

class Game implements IGame {
  private _ctx: CanvasRenderingContext2D
  private _background: Background

  constructor(ctx: CanvasRenderingContext2D) {
    this._ctx = ctx
    this._createBackground()
  }

  run() {
    this._background.animate()
  }

  private _createBackground() {
    this._background = new Background(this._ctx)
  }
}

export interface IGame {
  run(): void
}

export default Game
