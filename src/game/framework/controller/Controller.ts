import { IContextGame } from "../../types"
import { IController } from "./types"

/**
 * Controller - parse settings for save instance game figure
 */
export class Controller implements IController {
  private _instances: { update: () => void }[] = []

  constructor(settings, context: IContextGame) {
    settings.forEach((item) => {
      const instance = item.provide(context)
      this._instances.push(instance)
    })
  }

  public update() {
    this._instances.forEach((instance: { update: () => void }) => {
      instance.update()
    })
  }
}
