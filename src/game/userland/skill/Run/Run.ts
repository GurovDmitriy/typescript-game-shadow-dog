import { Skill } from "../Skill"
import { ICreatorCharacter } from "../../../framework/creator/CreatorCharacter/types"

export class Run extends Skill {
  private _active: boolean

  public constructor(
    character: ICreatorCharacter,
    cb: () => void,
    destroy: () => void,
  ) {
    super(character, cb, destroy)

    this._active = false
  }

  update(): void {}

  make(): void {
    this._cb()

    if (!this._active) {
      this._character.x = 100
      this._active = true
    }
  }

  destroy(): void {
    this._active = false
    this._character.x = -100
    this._destroy()
  }
}
