import { ICamera, ISubscriber } from "./types"

export class Camera implements ICamera {
  private readonly _subscribers: ISubscriber[]
  public distance: number
  public distanceCurrent: number
  public end: boolean

  public constructor() {
    this._subscribers = []
    this.distance = 0
    this.distanceCurrent = 0
    this.end = true
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

  public init(distance: number = 0, distanceCurrent: number = 0) {
    this.distance = distance
    this.distanceCurrent = distanceCurrent
    this.end = distance < distanceCurrent
  }

  public stop() {
    this._subscribers.forEach((subscriber) => {
      subscriber.model.move(0)
    })
  }

  public moveLeft(speed: number): void {
    if (this.end) return

    this._subscribers.forEach((subscriber) => {
      subscriber.model.move(-speed)

      if (subscriber.cb) subscriber.cb()
    })

    this.distanceCurrent -= speed
    this._endDistance()
  }

  public moveRight(speed: number): void {
    if (this.end) return

    this._subscribers.forEach((subscriber) => {
      subscriber.model.move(speed)

      if (subscriber.cb) subscriber.cb()
    })

    this.distanceCurrent += speed
    this._endDistance()
  }

  public setEnd() {
    this.end = true
    this.stop()
  }

  private _endDistance() {
    if (this.distanceCurrent >= this.distance) {
      this.setEnd()
    }
  }
}
