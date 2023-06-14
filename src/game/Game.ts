import { BTN, IController, TYPE_ACTION } from "../engine/Controller"
import Background from "./models/Background/Background"

/**
 * Game
 */
class Game implements IGame {
  private _ctx: CanvasRenderingContext2D
  private _background: Background
  private _controller: IController

  private _isBtnRightActive = false
  private _timerIdBtnRightActive = null

  constructor(ctx: CanvasRenderingContext2D, controller: IController) {
    this._ctx = ctx
    this._createBackground()
    this._controller = controller

    /**
     * Binding callbacks for controller event
     */
    this._controller.define(
      TYPE_ACTION.keydown,
      BTN.bntRight,
      this._setBtnRight.bind(this)
    )
    this._controller.define(
      TYPE_ACTION.keydown,
      BTN.arrowRight,
      this._setBtnRight.bind(this)
    )
  }

  /**
   * Run game cycle
   */
  public run() {
    this._moveRightBg()
  }

  /**
   * Cb for btn right press
   * @private
   */
  private _setBtnRight() {
    clearTimeout(this._timerIdBtnRightActive)

    this._isBtnRightActive = true

    this._timerIdBtnRightActive = setTimeout(() => {
      this._isBtnRightActive = false
    }, 100)
  }

  /**
   * Action move bg
   * @private
   */
  private _moveRightBg() {
    if (this._isBtnRightActive) {
      this._background.animate().updateSpeed(2)
    } else {
      this._background.animate().updateSpeed(0)
    }
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
