import { ICommand } from "../types"
import { IReceiver } from "../Receiver/types"
import { IGame } from "../../../../engine/types"

export class Start implements ICommand {
  private _receiver: IReceiver
  private readonly _game: IGame

  constructor(receiver: IReceiver, game: IGame) {
    this._receiver = receiver
    this._game = game
  }

  execute() {
    this._receiver.start(this._game)
  }
}
