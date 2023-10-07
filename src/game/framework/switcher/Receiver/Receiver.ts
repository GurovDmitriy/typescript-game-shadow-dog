import { IReceiver } from "./types"
import { IGame } from "../../../../engine/types"
import { IContextGame } from "../../../types"

/**
 * Receiver
 * Define action command.
 */
export class Receiver implements IReceiver {
  start(game: IGame, context: IContextGame) {
    context.keyboard.destroy()
    game.init()
  }

  stop() {
    console.log("game stop")
  }
}
