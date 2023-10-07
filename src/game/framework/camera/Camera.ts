import { ICamera, ISubscriber } from "./types"
import { ObservableCreator } from "../util/ObservableCreator/ObservableCreator"
import { IObservableCreator } from "../util/ObservableCreator/types"

export class Camera implements ICamera {
  private _observable: IObservableCreator<ICamera>
  public distance: number
  public distanceCurrent: number
  public end: boolean

  public constructor() {
    this._observable = new ObservableCreator()
    this.distance = 0
    this.distanceCurrent = 0
    this.end = true
  }

  public subscribe(subscriber: ISubscriber<ICamera>): () => void {
    return this._observable.subscribe(subscriber)
  }

  public unsubscribe(value: ISubscriber<ICamera>): void {
    this._observable.unsubscribe(value)
  }

  public init(distance: number = 0, distanceCurrent: number = 0) {
    this.distance = distance
    this.distanceCurrent = distanceCurrent
    this.end = distance < distanceCurrent
  }

  public stop() {
    this._observable.notify(this)
  }

  public moveLeft(speed: number): void {
    if (this.end) {
      this._observable.notify(this)
    } else {
      this.distanceCurrent -= speed
      this._checkDistance()

      this._observable.notify(this)
    }
  }

  public moveRight(speed: number): void {
    if (this.end) {
      this._observable.notify(this)
    } else {
      this.distanceCurrent += speed
      this._checkDistance()

      this._observable.notify(this)
    }
  }

  public setEnd() {
    this.end = true
    this.stop()

    this._observable.notify(this)
  }

  private _checkDistance() {
    if (this.distanceCurrent >= this.distance) {
      this.setEnd()
    }
  }
}
