import { BTN, IKeyboard, TYPE_ACTION } from "../types"

/**
 * Keyboard - for user input
 */
export class Keyboard implements IKeyboard {
  private _listeners: {
    action: TYPE_ACTION
    cb: (evt: KeyboardEvent) => void
  }[]

  public constructor() {
    this._listeners = []
  }

  public define(
    btn: BTN,
    action: () => void,
    after: () => void = () => {},
    press: boolean = false,
  ) {
    let timerId = null

    function cycle() {
      clearTimeout(timerId)
      timerId = setTimeout(() => {
        action()
        cycle()
      }, 20)
    }

    const listenerAction = {
      action: TYPE_ACTION.keydown,
      cb(evt: KeyboardEvent) {
        if (evt.code === btn) {
          if (press) {
            cycle()
          } else {
            action()
          }
        }
      },
    }

    document.addEventListener(listenerAction.action, listenerAction.cb)

    const listenerAfter = {
      action: TYPE_ACTION.keyup,
      cb(evt: KeyboardEvent) {
        if (evt.code === btn) {
          clearTimeout(timerId)
          after()
        }
      },
    }

    document.addEventListener(listenerAfter.action, listenerAfter.cb)

    this._listeners.push(listenerAction)
    this._listeners.push(listenerAfter)
  }

  public destroy() {
    this._listeners.forEach((listener) => {
      document.removeEventListener(listener.action, listener.cb)
    })
  }
}
