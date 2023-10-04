import { Skill } from "../Skill"
import { ICreatorCharacter } from "../../../framework/creator/CreatorCharacter/types"

export class Run extends Skill {
  public active: boolean
  private _distance: number

  public constructor(
    character: ICreatorCharacter,
    cb: () => void,
    destroy: () => void,
  ) {
    super(character, cb, destroy)

    this.active = false
    this._skip = false
    this._distance = 0
  }

  update(): void {}

  make(): void {
    this.active = true
    this._cb()

    if (this._distance <= 100) {
      this._character.x = 25
      this._distance += 25
    }
  }

  destroy(): void {
    this.active = false
    this._character.move(0, null)
    this._distance = 0

    this._destroy()
  }
}
