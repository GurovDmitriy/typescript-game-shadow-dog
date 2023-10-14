import { IReceiver } from "./types"
import { IGame } from "../../../../engine/types"

/**
 * Receiver
 * Define action command.
 */
export class Receiver implements IReceiver {
  start(game: IGame) {
    game.context.keyboard.destroy()
    game.init()
  }

  stop(game: IGame) {
    game.context.camera.setEnd()
  }
}
