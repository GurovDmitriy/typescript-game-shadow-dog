import { DisplayDistance } from "./DisplayDistance"
import { IModel } from "../../../framework/camera/types"

export class AdapterCameraDisplayDistance implements IModel {
  private _instance: DisplayDistance

  constructor(instance: DisplayDistance) {
    this._instance = instance
  }

  move(speed: number, distance: number, distanceCurrent: number) {
    const value = 100 - Math.round((distanceCurrent * 100) / distance)

    this._instance.setValue(value)
  }
}
