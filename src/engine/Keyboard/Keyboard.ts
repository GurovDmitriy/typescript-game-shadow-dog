import { BTN, IKeyboard, TYPE_ACTION } from "../types"

/**
 * Keyboard - for user input
 */
export class Keyboard implements IKeyboard {
  public constructor() {}

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

    document.addEventListener(TYPE_ACTION.keydown, (evt) => {
      if (evt.key === btn) {
        if (press) {
          cycle()
        } else {
          action()
        }
      }
    })

    document.addEventListener(TYPE_ACTION.keyup, (evt) => {
      if (evt.key === btn) {
        clearTimeout(timerId)
        after()
      }
    })
  }
}
