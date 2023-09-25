import { config } from "./config"
import {
  CreatorBackground,
  ICreatorBackground,
} from "../../../framework/creator/CreatorBackground/CreatorBackground"
import { IContextGame } from "../../../Game"

export class Background extends CreatorBackground implements IBackground {
  constructor(context: IContextGame) {
    super(config, context)
  }
}

export interface IBackground extends ICreatorBackground {}
