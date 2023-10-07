import { Skill } from "../Skill"
import { ICreatorCharacter } from "../../../framework/creator/CreatorCharacter/types"
import { Health } from "../Health/Health"

/**
 * Roll
 * Skill to deal damage.
 */
export class Roll extends Skill {
  private _date: number
  private _model: ICreatorCharacter | null
  private _distance: number
  public active: boolean

  public constructor(
    character: ICreatorCharacter,
    cb: () => void,
    destroy: () => void,
  ) {
    super(character, cb, destroy)

    this._date = 0
    this._model = null
    this._distance = 0
    this.active = false
  }

  update(): void {}

  make(
    model: ICreatorCharacter | null,
    power: number = 20,
    period: number = 2000,
    delay: number = 3000,
  ): void {
    if (this._date === 0) this._date = Date.now()

    if (this._date !== 0 && Date.now() > this._date + delay) {
      this._date = 0
      this._distance = 0
    }

    if (Date.now() < this._date + period) {
      this.active = true
      this._cb()

      if (this._distance <= 400) {
        this._character.x = 40
        this._distance += 40
      }

      const m = model || this._model

      if (m !== null && m.subscribeList.health) {
        const health = m.subscribeList.health as Health
        health.make(power)
      }
    } else {
      this.destroy()
    }

    this._unBind()
  }

  bind(model: ICreatorCharacter) {
    this._model = model
  }

  destroy(): void {
    this._unBind()
    this._destroy()
    this._character.move(0, null)
    this.active = false
  }

  private _unBind() {
    this._model = null
  }
}
