import { ICreatorCharacter } from "../../../framework/creator/CreatorCharacter/types"

export enum ActionEnemy4 {
  plain = "plain",
}

export interface IEnemy4 extends ICreatorCharacter {
  plain(): void
}
