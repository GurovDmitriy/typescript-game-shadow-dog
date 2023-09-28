import { IRect, ISubscriber } from "./types"

export class Collision {
  private readonly _subscribers: ISubscriber[]

  public constructor() {
    this._subscribers = []
  }

  public update(): void {
    this._subscribers.forEach((subscriber, index) => {
      this._findCollision(subscriber, index)
    })
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

  public unsubscribe(index: number): void {
    this._subscribers.splice(index, 1)
  }

  _findCollision(subscriber: ISubscriber, index: number) {
    for (let i = index + 1; i < this._subscribers.length; i++) {
      const collision = this._circle(
        subscriber.model,
        this._subscribers[i].model,
      )

      if (collision) {
        subscriber.cb(this._subscribers[i])
        this._subscribers[i].cb(subscriber)
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
