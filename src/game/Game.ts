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
  private _runBg: () => void

  private _dog: ShadowDog
  private _runDog: () => void

  constructor(ctx: CanvasRenderingContext2D, controller: IController) {
    this._ctx = ctx
    this._controller = controller

    this._background = new Background(ctx)
    this._setRunBg()

    this._dog = new ShadowDog(ctx, 6)
    this._setRunDog()
  }

  /**
   * Run game cycle
   */
  public run() {
    this._runBg()
    this._runDog()
  }

  /**
   * Settings for Background
   */
  private _setRunBg() {
    let active = false

    const setActive = this._timeoutAction("bg", () => {
      active = true
      return () => (active = false)
    })

    this._controller.define(
      TYPE_ACTION.keydown,
      BTN.arrowRight,
      setActive.bind(this)
    )

    this._runBg = function () {
      if (active) {
        this._background.animate().updateSpeed(2)
      } else {
        this._background.animate().updateSpeed(0)
      }
    }
  }

  /**
   * Settings for Shadow Dog
   */
  private _setRunDog() {
    let active = false

    const setActive = this._timeoutAction("dog", () => {
      active = true
      return () => (active = false)
    })

    this._controller.define(
      TYPE_ACTION.keydown,
      BTN.arrowRight,
      setActive.bind(this)
    )

    this._runDog = function () {
      if (active) {
        this._dog.run()
      } else {
        this._dog.plain()
      }
    }
  }

  private _timeoutAction(timerName, cb: () => () => void) {
    const timers = {}

    return function () {
      clearTimeout(timers[timerName])
      const alternate = cb()

      if (timers[timerName] === undefined) {
        timers[timerName] = null
        return
      }

      timers[timerName] = setTimeout(() => {
        timers[timerName] = undefined
        alternate()
      }, 80)
    }
  }
}

export interface IGame {
  run(): void
}

export default Game
