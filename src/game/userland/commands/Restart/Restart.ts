import { ICommand, ISwitcher } from "../../../framework/switcher/types"

export class Restart implements ICommand {
  private _switcher: ISwitcher

  public constructor(switcher: ISwitcher) {
    this._switcher = switcher
  }

  public execute(): void {
    this._switcher.execute("stop")
    setTimeout(() => this._switcher.execute("start"), 3000)
  }
}
