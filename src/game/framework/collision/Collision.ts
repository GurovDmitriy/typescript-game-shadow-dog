import { ICollision, IRect, ISubscriber } from "./types"

export class Collision implements ICollision {
  private readonly _subscribers: Set<ISubscriber>

  public constructor() {
    this._subscribers = new Set()
  }

  public update(): void {
    const arr = Array.from(this._subscribers)

    arr.forEach((subscriber, index) => {
      this._findCollision(subscriber, index)
    })
  }

  public subscribe(subscriber: ISubscriber): () => void {
    this._subscribers.add(subscriber)

    const unsubscribe = this.unsubscribe.bind(this, subscriber)

    if (subscriber.addUnsubscribe) {
      subscriber.addUnsubscribe(unsubscribe)
    }

    return unsubscribe
  }

  public unsubscribe(value: ISubscriber): void {
    this._subscribers.delete(value)
  }

  _findCollision(subscriber: ISubscriber, index: number) {
    const arr = Array.from(this._subscribers)

    for (let i = index + 1; i < arr.length; i++) {
      const collision = this._circle(subscriber, arr[i])

      if (collision) {
        subscriber.update(arr[i])
        arr[i].update(subscriber)
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
