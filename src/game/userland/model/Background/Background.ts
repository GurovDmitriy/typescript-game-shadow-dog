import { config } from "./config"
import { IBackground } from "./types"
import { CreatorBackground } from "../../../framework/creator/CreatorBackground/CreatorBackground"
import { IContextGame } from "../../../types"

export class Background extends CreatorBackground implements IBackground {
  constructor(context: IContextGame) {
    super(config, context)
  }
}
