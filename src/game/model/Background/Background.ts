import { config } from "./config"
import { IContextGame } from "../../types"
import { IBackground } from "./types"
import { CreatorBackground } from "../../framework/creator/CreatorBackground/CreatorBackground"

export class Background extends CreatorBackground implements IBackground {
  constructor(context: IContextGame) {
    super(config, context)
  }
}
