import { Skill } from "../Skill"
import { ICreatorCharacter } from "../../../framework/creator/CreatorCharacter/CreatorCharacter"

export class Jump extends Skill {
  public constructor(
    character: ICreatorCharacter,
    cbMake: () => void,
    cbDestroy: () => void,
  ) {
    super(character, cbMake, cbDestroy)
  }

  update(): void {}

  make(): void {
    console.log(this._character.y)
    if (this._character.y === 0) {
      this._cbMake()
      this._character.y = 200
    }
  }

  destroy() {
    this._cbDestroy()
  }
}
