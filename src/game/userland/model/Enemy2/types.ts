import { ICreatorCharacter } from "../../../framework/creator/CreatorCharacter/types"

export enum ActionEnemy2 {
  plain = "plain",
}

export interface IEnemy2 extends ICreatorCharacter {
  plain(): void
}
