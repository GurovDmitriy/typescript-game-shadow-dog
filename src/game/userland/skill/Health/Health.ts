import { Skill } from "../Skill"
import { ICreatorCharacter } from "../../../framework/creator/CreatorCharacter/types"

export class Health extends Skill {
  private _value: number

  public constructor(
    character: ICreatorCharacter,
    cbMake: () => void,
    cbDestroy: () => void,
  ) {
    super(character, cbMake, cbDestroy)

    this._value = 100
  }

  public update(): void {}

  make(): void {}

  reduce(value: number) {
    this._cb()

    if (this._value - value > 0) {
      this._value -= value
    } else {
      this._value = 0
    }
  }

  restore(value: number) {
    if (this._value + value < 100) {
      this._value += value
    } else {
      this._value = 100
    }
  }

  destroy(): void {
    this._destroy()
    this._value = 100
  }
}
