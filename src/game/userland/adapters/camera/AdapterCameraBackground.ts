import { IBackground } from "../../model/Background/types"
import { ICamera, ISubscriber } from "../../../framework/camera/types"
import { IContextGame } from "../../../types"

export class AdapterCameraBackground implements ISubscriber {
  private _instance: IBackground
  private readonly _context: IContextGame

  public constructor(instance: IBackground, context: IContextGame) {
    this._instance = instance
    this._context = context
  }

  public update(data: ICamera): void {
    if (data.end) {
      this._context.switcher.execute("restart")
    }
    this._instance.updateSpeed(data.speed)
  }
}
