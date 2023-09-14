import { BTN, IKeyboard, TYPE_ACTION } from "../types"

/**
 * Keyboard - for user input
 */
export class Keyboard implements IKeyboard {
  public constructor() {}

  public define(
    type: TYPE_ACTION,
    btn: BTN,
    action: () => void,
    after?: () => void,
  ) {
    if (after && typeof after === "function") {
      let timer: undefined | null | NodeJS.Timeout

      document.addEventListener(type, (evt) => {
        if (evt.key === btn) {
          action()
          clearTimeout(timer)

          if (timer === undefined) {
            clearTimeout(timer)
            timer = null
            return
          }

          timer = setTimeout(() => {
            timer = undefined
            after()
          }, 80)
        }
      })
    } else {
      document.addEventListener(type, (evt) => {
        if (evt.key === btn) {
          action()
        }
      })
    }
  }
}
