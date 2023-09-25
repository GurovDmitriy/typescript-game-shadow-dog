import { ICreatorCharacter } from "../../framework/creator/CreatorCharacter/CreatorCharacter"

export abstract class Skill {
  protected _character: ICreatorCharacter
  protected readonly _cbMake: () => void
  protected readonly _cbDestroy: () => void

  protected constructor(
    character: ICreatorCharacter,
    cbMake: () => void,
    cbDestroy: () => void,
  ) {
    this._character = character
    this._cbMake = cbMake
    this._cbDestroy = cbDestroy
  }

  abstract update(): void

  abstract make(): void

  abstract destroy(): void
}
