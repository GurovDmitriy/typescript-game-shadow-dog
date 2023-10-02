import { IReceiver } from "./types"
import { IGame } from "../../../../engine/types"

export class Receiver implements IReceiver {
  start(game: IGame) {
    game.init()
  }

  stop() {
    console.log("game stop")
  }
}
