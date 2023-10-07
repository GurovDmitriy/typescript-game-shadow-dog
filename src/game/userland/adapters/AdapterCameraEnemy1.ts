import { Enemy1 } from "../model/Enemy1/Enemy1"
import { ICamera, ISubscriber } from "../../framework/camera/types"

export class AdapterCameraEnemy1 implements ISubscriber {
  private _instance: Enemy1

  public constructor(instance: Enemy1) {
    this._instance = instance
  }

  public update(data: ICamera): void {
    this._instance.x = data.speed * -1
  }

  public addUnsubscribe(unsubscribe: () => void): void {
    this._instance.addUnsubscribe(unsubscribe)
  }
}
