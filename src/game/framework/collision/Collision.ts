import { ICollision, IRect, ISubscriber } from "./types"
import { IObservableCreator } from "../util/ObservableCreator/types"
import { ObservableCreator } from "../util/ObservableCreator/ObservableCreator"

/**
 * Collision
 * Check collision elements
 * and notify with each other as an argument.
 */
export class Collision implements ICollision {
  private readonly _observable: IObservableCreator<ISubscriber, ISubscriber>

  public constructor() {
    this._observable = new ObservableCreator<ISubscriber, ISubscriber>()
  }

  public update(): void {
    const arr = Array.from(this._observable.subscribers)

    arr.forEach((subscriber, index) => {
      this._findCollision(subscriber, index)
    })
  }

  public subscribe(subscriber: ISubscriber): () => void {
    return this._observable.subscribe(subscriber)
  }

  public unsubscribe(value: ISubscriber): void {
    this._observable.unsubscribe(value)
  }

  _findCollision(subscriber: ISubscriber, index: number) {
    const arr = Array.from(this._observable.subscribers)

    for (let i = index + 1; i < arr.length; i++) {
      const collision = this._circle(subscriber.model, arr[i].model)

      if (collision) {
        subscriber.cb(arr[i])
        arr[i].cb(subscriber)
      }
    }
  }

  private _square(rect1: IRect, rect2: IRect): boolean {
    if (
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y &&
      rect1.x + rect1.width > rect2.x &&
      rect1.x < rect2.x + rect2.width
    ) {
      return true
    }

    return false
  }

  private _circle(rect1: IRect, rect2: IRect): boolean {
    const modifierArea = 0.5

    const dx = rect2.x + rect2.width / 2 - (rect1.x + rect1.width / 2)
    const dy = rect2.y + rect2.height / 2 - (rect1.y + rect1.height / 2)

    const distance = Math.sqrt(dx * dx + dy * dy)
    const sumOfRadius =
      (rect1.width / 2) * modifierArea + (rect2.width / 2) * modifierArea

    if (distance < sumOfRadius) {
      // collision
      return true
    } else if (distance === sumOfRadius) {
      // touching
      return true
    } else {
      // no collision
      return false
    }
  }
}
