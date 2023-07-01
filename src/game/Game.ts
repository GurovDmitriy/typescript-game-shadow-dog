import { BTN, TYPE_ACTION } from "../engine/Controller"
import { IController } from "../engine/Engine"
import Background from "./models/Background/Background"

/**
 * Game
 */
class Game implements IGame {
  private _ctx: CanvasRenderingContext2D
  private _controller: IController

  private _background: Background
  private _runBg: () => void

  constructor(ctx: CanvasRenderingContext2D, controller: IController) {
    this._ctx = ctx
    this._controller = controller

    this._background = new Background(ctx)
    this._runBg = this._setBg()
  }

  /**
   * Run game cycle
   */
  public run() {
    this._runBg()
  }

  /**
   * Settings for Background
   */
  private _setBg() {
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

    return function run() {
      if (active) {
        this._background.animate().updateSpeed(2)
      } else {
        this._background.animate().updateSpeed(0)
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
