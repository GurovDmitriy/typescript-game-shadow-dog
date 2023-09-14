import { IPhysics, ISubscriber } from "./types"

export class Physics implements IPhysics {
  private _subscribers: ISubscriber[]

  public constructor() {
    this._subscribers = []
  }

  public subscribe(subscriber: ISubscriber): void {
    this._subscribers.push(subscriber)
  }

  public update(): void {
    this._subscribers.forEach((item) => {
      if (item.model.y < 0) {
        if (item.cb && typeof item.cb === "function") item.cb()
        item.model.y = -6

        if (item.model.y >= 0) {
          if (item.cbEnd && typeof item.cbEnd === "function") item.cbEnd()
        }
      }
    })
  }
}
