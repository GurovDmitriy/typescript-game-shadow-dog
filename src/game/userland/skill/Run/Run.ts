import { Skill } from "../Skill"
import { ICreatorCharacter } from "../../../framework/creator/CreatorCharacter/types"

export class Run extends Skill {
  private _make: boolean

  public constructor(
    character: ICreatorCharacter,
    cb: () => void,
    destroy: () => void,
  ) {
    super(character, cb, destroy)

    this._make = false
  }

  update(): void {}

  make(): void {
    if (!this._make) {
      this._character.x = 100
      this._make = true
    }

    this._cb()
  }

  destroy(): void {
    this._make = false
    this._destroy()
    this._character.x = -100
  }
}
