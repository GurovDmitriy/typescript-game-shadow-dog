import { IInvoker } from "./Invoker/types"
import { IReceiver } from "./Receiver/types"
import { Invoker } from "./Invoker/Invoker"
import { Receiver } from "./Receiver/Receiver"
import { Start } from "./Start/Start"
import { COMMAND_GAME, ICommand, ISwitcher } from "./types"
import { Stop } from "./Stop/Stop"
import { IGame } from "../../../engine/types"

/**
 * Switcher
 * Toggle game commands with invoker interface.
 */
export class Switcher implements ISwitcher {
  private _invoker: IInvoker
  private readonly _receiver: IReceiver
  private readonly _game: IGame
  public status: string

  constructor(game: IGame) {
    this._invoker = new Invoker()
    this._receiver = new Receiver()
    this._game = game
    this.status = COMMAND_GAME.start

    this._invoker.install(
      COMMAND_GAME.start,
      new Start(this._receiver, this._game),
    )
    this._invoker.install(
      COMMAND_GAME.stop,
      new Stop(this._receiver, this._game),
    )
  }

  public execute(command: string): void {
    this._invoker.execute(command)

    this.status = command
  }

  public install(name: string, command: ICommand): void {
    this._invoker.install(name, command)
  }
}
