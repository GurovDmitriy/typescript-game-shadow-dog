import { ICommand } from "../types"
import { IReceiver } from "../Receiver/types"
import { IGame } from "../../../../engine/types"

/**
 * Stop
 * Command stop game.
 */
export class Stop implements ICommand {
  private _receiver: IReceiver
  private readonly _game: IGame

  public constructor(receiver: IReceiver, game: IGame) {
    this._receiver = receiver
    this._game = game
  }

  public execute(): void {
    this._receiver.stop(this._game)
  }
}
