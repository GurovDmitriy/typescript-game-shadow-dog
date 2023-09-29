import { ICreatorCharacter } from "../../framework/creator/CreatorCharacter/types"

export abstract class Skill {
  protected _character: ICreatorCharacter
  protected readonly _cb: () => void
  protected readonly _destroy?: () => void
  protected readonly _update?: () => void

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
  }

  abstract update(...args: never[]): void

  abstract make(...args: never[]): void

  abstract destroy(...args: never[]): void
}
