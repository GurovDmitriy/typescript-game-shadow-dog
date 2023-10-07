import { IBackground } from "../model/Background/types"
import { ICamera, ISubscriber } from "../../framework/camera/types"

export class AdapterCameraBackground implements ISubscriber {
  private _instance: IBackground

  constructor(instance: IBackground) {
    this._instance = instance
  }

  update(data: ICamera): void {
    this._instance.updateSpeed(data.speed)
  }
}
