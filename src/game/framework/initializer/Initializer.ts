import { IInitializer } from "./types"
import { ICreatorBackground } from "../creator/CreatorBackground/types"
import { IContextGame } from "../../types"
import { ICreatorCharacter } from "../creator/CreatorCharacter/types"

/**
 * Controller - parse settings for save instance game figure
 */
export class Initializer implements IInitializer {
  private _instanceList: { update: () => void }[] = []

  constructor(
    settings: {
      provide: (
        context: IContextGame,
      ) => Array<ICreatorCharacter | ICreatorBackground>
    },
    context: IContextGame,
  ) {
    this._instanceList = settings.provide(context)
  }

  public update() {
    this._instanceList.forEach((instance: { update: () => void }) => {
      instance.update()
    })
  }
}
