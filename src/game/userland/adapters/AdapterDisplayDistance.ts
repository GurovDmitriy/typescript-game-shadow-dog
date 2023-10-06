import { IModel } from "../display/types"
import { ICamera } from "../../framework/camera/types"

export class AdapterDisplayDistance implements IModel {
  private _instance: ICamera

  public constructor(instance: ICamera) {
    this._instance = instance
  }

  public get value(): number {
    return this._instance.distanceCurrent
  }

  public get amount(): number {
    return this._instance.distance
  }
}
