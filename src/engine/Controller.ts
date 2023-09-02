import { BTN, IController, TYPE_ACTION } from "./Engine"

/**
 * Controller like a keyboard
 */
class Controller implements IController {
  constructor() {}

  public init() {
    console.log("controller init")
  }

  public define(type: TYPE_ACTION, btn: BTN, action: () => void) {
    document.addEventListener(type, (evt) => {
      if (evt.key === btn) {
        action()
      }
    })
  }
}

export default Controller
