import { ICommand } from "../types"
import { IReceiver } from "../Receiver/types"
import { IGame } from "../../../../engine/types"

/**
 * Start
 * Command start game.
 */
export class Start implements ICommand {
  private _receiver: IReceiver
  private readonly _game: IGame

  public constructor(receiver: IReceiver, game: IGame) {
    this._receiver = receiver
    this._game = game
  }

  public execute(): void {
    this._receiver.start(this._game)
  }
}
