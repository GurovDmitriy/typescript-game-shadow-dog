import { ICreatorCharacter } from "../../framework/creator/CreatorCharacter/types"

export abstract class Skill {
  protected _character: ICreatorCharacter
  protected readonly _cb: () => void
  protected readonly _destroy: () => void

  protected constructor(
    character: ICreatorCharacter,
    cb: () => void,
    destroy: () => void,
  ) {
    this._character = character
    this._cb = cb
    this._destroy = destroy
  }

  abstract update(): void

  abstract make(): void

  abstract destroy(): void
}
