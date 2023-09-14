import { IJump } from "./types"
import { ICreatorCharacter } from "../../creator/CreatorCharacter/types"
import { ISkill } from "../types"

export class Jump implements IJump, ISkill {
  private _character: ICreatorCharacter
  private readonly _speed: number
  private readonly _weight: number
  private readonly _power: number
  private _active: boolean

  constructor(
    character: ICreatorCharacter,
    weight: number = 10,
    power: number = 20,
  ) {
    this._character = character

    this._weight = weight
    this._power = power
    this._speed = Math.round(this._power / this._weight) * 10
    this._active = false
  }

  update(): void {
    if (this._active && this._character.y > -20) {
      const value = this._speed
      this._character.y = value
    } else {
      this._active = false
    }
  }

  make(): void {
    this._active = true
  }
}
