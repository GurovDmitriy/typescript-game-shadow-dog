import { ICommand } from "../types"
import { IReceiver } from "../Receiver/types"

export class Start implements ICommand {
  private _receiver: IReceiver

  constructor(receiver: IReceiver) {
    this._receiver = receiver
  }

  execute() {
    this._receiver.start()
  }
}
