import { ICreatorCharacter } from "../../framework/creator/CreatorCharacter/types"

export enum ActionEnemy3 {
  plain = "plain",
}

export interface IEnemy3 extends ICreatorCharacter {
  plain(): void
}
