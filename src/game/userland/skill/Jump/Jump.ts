import { Skill } from "../Skill"
import { ICreatorCharacter } from "../../../framework/creator/CreatorCharacter/types"

export class Jump extends Skill {
  private _distance: number
  private _power: number
  private _distanceCurrent: number
  public active: boolean

  public constructor(
    character: ICreatorCharacter,
    cb: () => void,
    destroy: () => void,
  ) {
    super(character, cb, destroy)

    this._distance = 0
    this._power = 0
    this._distanceCurrent = 0
    this.active = false
  }

  update(): void {
    if (this._distance > this._distanceCurrent) {
      this._cb()
      this._distanceCurrent += this._power
      this._character.y = this._power
    }

    if (this._distanceCurrent >= this._distance) {
      this._distance = 0
    }

    if (this._character.y === 0) this.active = false
  }

  make(distance: number = 200, power: number = 20): void {
    if (this._character.y === 0) {
      this.active = true
      this._distance = distance
      this._power = power
      this._distanceCurrent = 0
    }
  }

  destroy(): void {
    this._destroy()
  }
}
