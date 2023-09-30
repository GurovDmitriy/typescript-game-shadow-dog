import { Skill } from "../Skill"
import { ICreatorCharacter } from "../../../framework/creator/CreatorCharacter/types"
import { Health } from "../Health/Health"

export class Roll extends Skill {
  private _date: number
  private _model: ICreatorCharacter | null
  public active: boolean

  public constructor(
    character: ICreatorCharacter,
    cb: () => void,
    destroy: () => void,
  ) {
    super(character, cb, destroy)

    this._date = Date.now()
    this._model = null
    this.active = false
  }

  update(): void {}

  make(
    model: ICreatorCharacter | null,
    power: number = 20,
    period: number = 0,
  ): void {
    if (!this.active) {
      this._character.x = 200
    }

    this.active = true

    if (Date.now() > this._date + period) {
      const m = model || this._model

      if (m !== null && m.subscribeList.health) {
        const health = m.subscribeList.health as Health
        health.make(power)
      }

      this._date = Date.now()
    }

    this._cb()
    this._unBind()
  }

  bind(model: ICreatorCharacter) {
    this._model = model
  }

  destroy(): void {
    this._destroy()
    this._unBind()
    this._character.x = -200
    this.active = false
  }

  private _unBind() {
    this._model = null
  }
}
