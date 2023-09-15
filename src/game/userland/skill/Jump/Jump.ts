import { ICreatorCharacter } from "../../../framework/creator/CreatorCharacter/types"
import { IJump } from "./types"

export class Jump implements IJump {
  private _character: ICreatorCharacter

  public constructor(character: ICreatorCharacter) {
    this._character = character
  }

  update(): void {}

  make(): void {
    this._character.y = 200
  }
}
