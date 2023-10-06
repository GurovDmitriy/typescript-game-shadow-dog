import { Skill } from "../Skill"
import { ICreatorCharacter } from "../../../framework/creator/CreatorCharacter/types"
import { Health } from "../Health/Health"

/**
 * Sit - skill for recovery health
 * // TODO: make utils for abstract class for timeout
 */
export class Sit extends Skill {
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

  make(power: number = 5, period: number = 2000): void {
    const health = this._character.subscribeList?.health as Health

    if (health && Date.now() > this._date + period) {
      health.destroy(power)

      this._date = Date.now()
    }

    this._cb()
  }

  destroy(): void {
    this._destroy()
  }
}
