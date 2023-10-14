import { ICamera, ISubscriber } from "../../framework/camera/types"
import { IEnemy1 } from "../model/Enemy1/types"

export class AdapterCameraEnemy implements ISubscriber {
  private _instance: IEnemy1

  public constructor(instance: IEnemy1) {
    this._instance = instance
  }

  public update(data: ICamera): void {
    this._instance.x = data.speed * -1
  }

  public addUnsubscribe(unsubscribe: () => void): void {
    this._instance.addUnsubscribe(unsubscribe)
  }
}
