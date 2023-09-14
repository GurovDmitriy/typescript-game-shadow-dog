import { ICreatorCharacter } from "../../framework/creator/CreatorCharacter/types"

export enum ActionShadowDog {
  plain = "plain",
  jump = "jump",
  fall = "fall",
  run = "run",
  dizzy = "dizzy",
  sit = "sit",
  roll = "roll",
  bite = "bite",
  ko = "ko",
  struck = "struck",
}

export interface IShadowDog extends ICreatorCharacter {
  plain(): void
  jump(): void
  fall(): void
  run(): void
  dizzy(): void
  sit(): void
  roll(): void
  bite(): void
  ko(): void
  struck(): void
}
