import { IPhysics, ISubscriber } from "./types"

export class Physics implements IPhysics {
  private readonly _subscribers: ISubscriber[]

  public constructor() {
    this._subscribers = []
  }

  public subscribe(subscriber: ISubscriber): () => void {
    this._subscribers.push(subscriber)
    const unsubscribe = this.unsubscribe.bind(
      this,
      this._subscribers.length - 1,
    )

    if (subscriber.model.addUnsubscribe) {
      subscriber.model.addUnsubscribe(unsubscribe)
    }

    return unsubscribe
  }

  public unsubscribe(index: number) {
    this._subscribers.splice(index, 1)
  }

  public update(): void {
    this._subscribers.forEach((item) => {
      if (item.model.y !== 0) {
        if (item.cb && typeof item.cb === "function") item.cb()

        if (item.model.y + 6 < 0) {
          item.model.y = -6
        } else {
          const distance = item.model.y
          item.model.y = distance

          if (item.cbEnd && typeof item.cbEnd === "function") item.cbEnd()
        }
      }
    })
  }
}
