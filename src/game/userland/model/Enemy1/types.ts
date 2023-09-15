import { ICreatorCharacter } from "../../../framework/creator/CreatorCharacter/types"

export enum ActionEnemy1 {
  plain = "plain",
}

export interface IEnemy1 extends ICreatorCharacter {
  plain(): void
}
