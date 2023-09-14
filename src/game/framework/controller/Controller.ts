import { IContextGame } from "../../types"
import { IController } from "./types"
import { ICreatorCharacter } from "../creator/CreatorCharacter/types"

/**
 * Controller - parse settings for game
 */
export class Controller implements IController {
  private _instances: { update: () => void }[] = []

  constructor(
    settings: {
      name: { new (context: IContextGame): ICreatorCharacter }
      provide: (instance: ICreatorCharacter) => object
    }[],
    context: IContextGame,
  ) {
    settings.forEach((item) => {
      const instance = new item.name(context)
      const provide = item.provide(instance)

      this._prepare(provide)
      this._skills(provide, instance)
      this._physics(provide, context, instance)
      this._defineInput(provide, context)

      this._instances.push(instance)
    })
  }

  public update() {
    this._instances.forEach((instance: { update: () => void }) => {
      instance.update()
    })
  }

  _prepare(provide) {
    provide.prepare()
  }

  _physics(provide, context, instance) {
    context.physics.subscribe({
      model: instance,
      cb: provide.subscribe.physics.cb,
      cbEnd: provide.subscribe.physics.cbEnd,
    })
  }

  _defineInput(provide, context) {
    provide.defineInput.forEach((item) => {
      context.keyboard.define(item.type, item.btn, item.action, item.after)
    })
  }

  _skills(provide, instance) {
    provide.skills?.forEach((skill) => {
      instance.addSkill(new skill(instance))
    })
  }
}
