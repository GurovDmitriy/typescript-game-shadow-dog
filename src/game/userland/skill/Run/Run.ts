import { ICreatorCharacter } from "../../../framework/creator/CreatorCharacter/CreatorCharacter"
import { Skill } from "../Skill"

export class Run extends Skill {
  private _make: boolean

  public constructor(
    character: ICreatorCharacter,
    cbMake: () => void,
    cbDestroy: () => void,
  ) {
    super(character, cbMake, cbDestroy)

    this._make = false
  }

  update(): void {}

  make(): void {
    if (!this._make) {
      this._character.x = 100
      this._make = true
    }

    this._cbMake()
  }

  destroy(): void {
    this._make = false
    this._cbDestroy()
    this._character.x = -100
  }
}
