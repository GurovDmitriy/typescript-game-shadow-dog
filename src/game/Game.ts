import { BTN, TYPE_ACTION } from "../engine/Controller"
import { IController } from "../engine/Engine"
import Background from "./models/Background/Background"
import ShadowDog from "./models/ShadowDog/ShadowDog"

/**
 * Game
 */
class Game implements IGame {
  private _ctx: CanvasRenderingContext2D
  private _controller: IController

  private _background: Background
  private _dog: ShadowDog

  private _isMoveBg = false
  private _timerIdMoveBg = null

  private _isRunDog = false
  private _isSitDog = false
  private _timerIdRunDog = null

  constructor(ctx: CanvasRenderingContext2D, controller: IController) {
    this._ctx = ctx
    this._controller = controller

    this._background = new Background(this._ctx)
    this._dog = new ShadowDog(this._ctx, 6)

    /**
     * Binding callbacks for Background
     */
    this._controller.define(
      TYPE_ACTION.keydown,
      BTN.arrowRight,
      this._setMoveBg.bind(this)
    )

    /**
     * Binding callbacks for Dog
     */
    this._controller.define(
      TYPE_ACTION.keydown,
      BTN.arrowRight,
      this._setRunDog.bind(this)
    )
    this._controller.define(
      TYPE_ACTION.keydown,
      BTN.arrowDown,
      this._setSitDog.bind(this)
    )
  }

  /**
   * Run game cycle
   */
  public run() {
    this._moveBg()
    this._runDog()
  }

  /**
   * Callbacks for btn
   */
  private _setMoveBg() {
    clearTimeout(this._timerIdMoveBg)

    this._isMoveBg = true

    this._timerIdMoveBg = setTimeout(() => {
      this._isMoveBg = false
    }, 100)
  }

  private _setRunDog() {
    clearTimeout(this._timerIdRunDog)

    this._isRunDog = true

    this._timerIdRunDog = setTimeout(() => {
      this._isRunDog = false
    }, 100)
  }

  private _setSitDog() {
    clearTimeout(this._timerIdRunDog)

    this._isSitDog = true

    this._timerIdRunDog = setTimeout(() => {
      this._isSitDog = false
    }, 100)
  }

  /**
   * Actions
   */
  private _moveBg() {
    if (this._isMoveBg) {
      this._background.animate().updateSpeed(2)
    } else {
      this._background.animate().updateSpeed(0)
    }
  }

  private _runDog() {
    if (this._isRunDog) {
      this._dog.run()
    } else if (this._isSitDog) {
      this._dog.sit()
    } else {
      this._dog.plain()
    }
  }
}

export interface IGame {
  run(): void
}

export default Game
