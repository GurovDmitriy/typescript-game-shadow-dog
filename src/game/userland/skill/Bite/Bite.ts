import { Skill } from "../Skill"
import { ICreatorCharacter } from "../../../framework/creator/CreatorCharacter/types"
import { Health } from "../Health/Health"

export class Bite extends Skill {
  private _date: number

  public constructor(
    character: ICreatorCharacter,
    cb: () => void,
    destroy: () => void,
  ) {
    super(character, cb, destroy)

    this._date = Date.now()
  }

  update(): void {}

  make(model: ICreatorCharacter, power: number = 20, period: number = 0): void {
    if (Date.now() > this._date + period) {
      if (model.subscribeList.health) {
        const health = model.subscribeList.health as unknown as Health
        health.make(power)
      }

      this._date = Date.now()
    }

    this._cb()
  }

  destroy(): void {
    this._destroy()
  }
}
