import { Background } from "./Background"
import { type IMover } from "../../../framework/camera/Camera"

export class AdapterCameraBackground implements IMover {
  private _instance: Background

  constructor(instance: Background) {
    this._instance = instance
  }

  move(speed: number) {
    this._instance.updateSpeed(speed)
  }
}
