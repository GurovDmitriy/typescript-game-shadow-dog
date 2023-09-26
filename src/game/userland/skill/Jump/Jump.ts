import { Skill } from "../Skill"
import { ICreatorCharacter } from "../../../framework/creator/CreatorCharacter/CreatorCharacter"

export class Jump extends Skill {
  public constructor(
    character: ICreatorCharacter,
    cb: () => void,
    destroy: () => void,
  ) {
    super(character, cb, destroy)
  }

  update(): void {}

  make(power: number = 200): void {
    if (this._character.y === 0) {
      this._cb()
      this._character.y = power
    }
  }

  destroy() {
    this._destroy()
  }
}
