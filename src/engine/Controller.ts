import { IController } from "./Engine"

/**
 * Controller like a keyboard
 */
class Controller implements IController {
  public define(type: TYPE_ACTION, btn: BTN, action: () => void) {
    document.addEventListener(type, (evt) => {
      if (evt.key === btn) {
        action()
      }
    })
  }
}

/**
 * Types events button
 */
export enum TYPE_ACTION {
  keypress = "keypress",
  keydown = "keydown",
}

/**
 * Describe buttons
 */
export enum BTN {
  bntRight = "d",
  arrowRight = "ArrowRight",
  arrowDown = "ArrowDown",
}

export default Controller
