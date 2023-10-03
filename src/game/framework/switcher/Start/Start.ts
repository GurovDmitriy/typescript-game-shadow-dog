import { ICommand } from "../types"
import { IReceiver } from "../Receiver/types"
import { IContextEngine, IGame } from "../../../../engine/types"

export class Start implements ICommand {
  private _receiver: IReceiver
  private readonly _game: IGame
  private readonly _context: IContextEngine

  constructor(receiver: IReceiver, game: IGame, context: IContextEngine) {
    this._receiver = receiver
    this._game = game
    this._context = context
  }

  execute() {
    this._receiver.start(this._game, this._context)
  }
}
