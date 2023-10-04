import { ICreatorCharacter } from "../../framework/creator/CreatorCharacter/types"

export abstract class Skill {
  protected _character: ICreatorCharacter
  protected readonly _cb: () => void
  protected readonly _destroy?: () => void
  protected readonly _update?: () => void
  protected _skip: boolean

  protected constructor(
    character: ICreatorCharacter,
    cb: () => void,
    destroy?: () => void,
    update?: () => void,
  ) {
    this._character = character
    this._cb = cb
    this._destroy = destroy
    this._update = update
    this._skip = false
  }

  abstract update(...args: never[]): void

  abstract make(...args: never[]): void

  abstract destroy(...args: never[]): void

  skip(value: boolean = false): void {
    this._skip = value
  }
}
