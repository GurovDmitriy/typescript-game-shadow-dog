import { BTN, IController, TYPE_ACTION } from "../engine/Controller"
import Background from "./models/Background/Background"

/**
 * Game
 */
class Game implements IGame {
  private _ctx: CanvasRenderingContext2D
  private _background: Background
  private _controller: IController

  private _isMoveBg = false
  private _timerIdMoveBg = null

  constructor(ctx: CanvasRenderingContext2D, controller: IController) {
    this._ctx = ctx
    this._background = new Background(this._ctx)
    this._controller = controller

    /**
     * Binding callbacks for controller event
     */
    this._controller.define(
      TYPE_ACTION.keydown,
      BTN.bntRight,
      this._setMoveBg.bind(this)
    )
    this._controller.define(
      TYPE_ACTION.keydown,
      BTN.arrowRight,
      this._setMoveBg.bind(this)
    )
  }

  /**
   * Run game cycle
   */
  public run() {
    this._moveBg()
  }

  /**
   * Cb for btn right press
   */
  private _setMoveBg() {
    clearTimeout(this._timerIdMoveBg)

    this._isMoveBg = true

    this._timerIdMoveBg = setTimeout(() => {
      this._isMoveBg = false
    }, 100)
  }

  /**
   * Action move bg
   */
  private _moveBg() {
    if (this._isMoveBg) {
      this._background.animate().updateSpeed(2)
    } else {
      this._background.animate().updateSpeed(0)
    }
  }
}

export interface IGame {
  run(): void
}

export default Game
