import { type BTNType, type IKeyboard, TYPE_ACTION } from "../Engine"

/**
 * Keyboard - for user input
 */
export class Keyboard implements IKeyboard {
  public constructor() {}

  public define(
    btn: BTNType,
    action: () => void,
    after?: () => void,
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
        if (after) after()
      }
    })
  }
}
