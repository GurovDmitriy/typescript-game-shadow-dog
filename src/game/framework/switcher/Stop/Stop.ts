import { ICommand } from "../types"
import { IReceiver } from "../Receiver/types"

/**
 * Stop
 * Command stop game.
 */
export class Stop implements ICommand {
  private _receiver: IReceiver

  constructor(receiver: IReceiver) {
    this._receiver = receiver
  }

  execute() {
    this._receiver.stop()
  }
}
