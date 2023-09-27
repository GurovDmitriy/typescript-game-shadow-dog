import { config } from "./config"
import { CreatorBackground } from "../../../framework/creator/CreatorBackground/CreatorBackground"
import { IBackground } from "./types"
import { IContextGame } from "../../../types"

export class Background extends CreatorBackground implements IBackground {
  constructor(context: IContextGame) {
    super(config, context)
  }
}
