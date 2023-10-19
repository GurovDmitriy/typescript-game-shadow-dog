import { IModel } from "../../display/types"
import { ShadowDog } from "../../model/ShadowDog/ShadowDog"
import { Health } from "../../skill/Health/Health"

export class AdapterDisplayShadowDogHealth implements IModel {
  private _instance: ShadowDog

  public constructor(instance: ShadowDog) {
    this._instance = instance
  }

  public get value(): number {
    return (this._instance.subscribeList.health as Health).value
  }

  public get amount(): number {
    return 100
  }
}
