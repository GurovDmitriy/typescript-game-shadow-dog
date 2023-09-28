import { IModel } from "../../../framework/camera/types"
import { Enemy1 } from "./Enemy1"

export class AdapterCameraEnemy1 implements IModel {
  private _instance: Enemy1

  constructor(instance: Enemy1) {
    this._instance = instance
  }

  move(speed: number) {
    this._instance.x = speed * -1
  }

  addUnsubscribe(unsubscribe: () => void) {
    this._instance.addUnsubscribe(unsubscribe)
  }
}
