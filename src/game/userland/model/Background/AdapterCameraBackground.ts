import { Background } from "./Background"
import { IMover } from "../../../framework/camera/types"

export class AdapterCameraBackground implements IMover {
  private _instance: Background

  constructor(instance: Background) {
    this._instance = instance
  }

  move(speed: number) {
    this._instance.updateSpeed(speed)
  }
}
