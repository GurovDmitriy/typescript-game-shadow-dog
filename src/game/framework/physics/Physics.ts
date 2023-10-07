import { IPhysics, ISubscriber } from "./types"
import { IObservableCreator } from "../util/ObservableCreator/types"
import { ObservableCreator } from "../util/ObservableCreator/ObservableCreator"

/**
 * Physics
 * Creating attraction for game objects.
 */
export class Physics implements IPhysics {
  private _observable: IObservableCreator<ISubscriber, undefined>

  public constructor() {
    this._observable = new ObservableCreator<ISubscriber, undefined>()
  }

  public subscribe(subscriber: ISubscriber): () => void {
    return this._observable.subscribe(subscriber)
  }

  public unsubscribe(value: ISubscriber): void {
    this._observable.unsubscribe(value)
  }

  public update(): void {
    this._observable.subscribers.forEach((item) => {
      if (item.y !== 0) {
        if (item.cb && typeof item.cb === "function") item.cb()

        if (item.y + 6 < 0) {
          item.y = -6
        } else {
          const distance = item.y
          item.y = distance

          if (item.cbEnd && typeof item.cbEnd === "function") item.cbEnd()
        }
      }
    })
  }
}
