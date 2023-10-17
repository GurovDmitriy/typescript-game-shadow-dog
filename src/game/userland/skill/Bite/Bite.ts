import { Skill } from "../Skill"
import { ICreatorCharacter } from "../../../framework/creator/CreatorCharacter/types"
import { Health } from "../Health/Health"

/**
 * Bite
 * Skill to deal damage.
 */
export class Bite extends Skill {
  private _date: number
  private _model: ICreatorCharacter | null
  public active: boolean
  private _delay: boolean

  public constructor(
    character: ICreatorCharacter,
    cb: () => void,
    destroy: () => void,
  ) {
    super(character, cb, destroy)

    this._date = 0
    this._model = null
    this.active = false
    this._delay = false
  }

  update(): void {}

  make(
    model: ICreatorCharacter | null,
    power: number = 20,
    period: number = 0,
    delay: number = 0,
  ): void {
    if (this._date === 0) {
      this._date = Date.now()
    }

    if (!this._delay && Date.now() < this._date + delay) {
      return
    }

    this.active = true

    if (Date.now() > this._date + period) {
      this._delay = true
      const m = model || this._model

      if (m !== null && m.model.subscribeList.health) {
        const health = m.model.subscribeList.health as Health
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
    this.active = false
  }

  private _unBind() {
    this._model = null
  }
}
