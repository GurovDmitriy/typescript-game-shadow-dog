import { ICamera, ISubscriber } from "./types"

export class Camera implements ICamera {
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

  public unsubscribe(index: number): void {
    this._subscribers.splice(index, 1)
  }

  public stop() {
    this._subscribers.forEach((subscriber) => {
      subscriber.model.move(0)
    })
  }

  public moveLeft(speed: number): void {
    this._subscribers.forEach((subscriber) => {
      subscriber.model.move(-speed)

      if (subscriber.cb) subscriber.cb()
    })
  }

  public moveRight(speed: number): void {
    this._subscribers.forEach((subscriber) => {
      subscriber.model.move(speed)

      if (subscriber.cb) subscriber.cb()
    })
  }
}
