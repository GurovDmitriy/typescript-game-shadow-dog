import { ICommand, ISwitcher } from "../../../framework/switcher/types"

export class Restart implements ICommand {
  private _switcher: ISwitcher

  constructor(switcher: ISwitcher) {
    this._switcher = switcher
  }

  execute() {
    this._switcher.execute("stop")
    setTimeout(() => this._switcher.execute("start"), 3000)
  }
}
