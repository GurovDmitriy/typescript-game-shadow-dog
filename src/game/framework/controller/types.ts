import { BTN, TYPE_ACTION } from "../../../engine/types"
import { IContextGame } from "../../types"
import { ICreatorCharacter } from "../creator/CreatorCharacter/types"

export interface IController {
  update(): void
}

export interface ISettings {
  name: { new (context: IContextGame): { update?: () => void } }
  provide: (instance) => ISettingsProvide
}

export interface ISettingsProvide {
  prepare?: () => void

  skills?: { new (character: ICreatorCharacter): { update: () => void } }[]

  subscribe?: {
    physics: {
      cb?: () => void
      cbEnd?: () => void
    }
  }

  defineInput?: {
    type: TYPE_ACTION
    btn: BTN
    action: () => void
    after?: () => void
  }[]
}
