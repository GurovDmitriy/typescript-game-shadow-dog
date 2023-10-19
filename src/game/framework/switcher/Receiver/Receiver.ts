import { IReceiver } from "./types"
import { IGame } from "../../../../engine/types"

/**
 * Receiver
 * Define action command.
 */
export class Receiver implements IReceiver {
  public start(game: IGame): void {
    game.context.keyboard.destroy()
    game.init()
  }

  public stop(game: IGame): void {
    game.context.camera.setEnd()
  }
}
