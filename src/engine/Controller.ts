/**
 * Controller class like a keyboard
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

export interface IController {
  define(type: TYPE_ACTION, btn: BTN, action: () => void): void
}

/**
 * Types events keys
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
}

export default Controller
