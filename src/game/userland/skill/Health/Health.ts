import { ICreatorCharacter } from "../../../framework/creator/CreatorCharacter/types"
import { Skill } from "../Skill"

/**
 * Health
 * Skill for control damage.
 */
export class Health extends Skill {
  private _value: number

  public constructor(
    character: ICreatorCharacter,
    cb: () => void,
    destroy: () => void,
    update: () => void,
  ) {
    super(character, cb, destroy, update)

    this._value = 100
  }

  public update(): void {
    this._update()
  }

  public get value() {
    return this._value
  }

  public make(value: number = 10): void {
    if (this._value - value > 0) {
      this._value -= value
    } else {
      this._value = 0
    }

    this._cb()
  }

  public destroy(value: number = 10): void {
    if (this._value + value < 100) {
      this._value += value
    } else {
      this._value = 100
    }

    this._destroy()
  }
}
