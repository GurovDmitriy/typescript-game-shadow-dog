import { type IContextGame } from "../../Game"
import { type ICreatorCharacter } from "../creator/CreatorCharacter/CreatorCharacter"
import { type ICreatorBackground } from "../creator/CreatorBackground/CreatorBackground"

export interface IInitializer {
  update(): void
}

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
