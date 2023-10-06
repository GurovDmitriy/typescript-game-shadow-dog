import { IModel } from "../../framework/camera/types"
import { IBackground } from "../model/Background/types"

export class AdapterCameraBackground implements IModel {
  private _instance: IBackground

  constructor(instance: IBackground) {
    this._instance = instance
  }

  move(speed: number): void {
    this._instance.updateSpeed(speed)
  }
}
