import { ICamera, ISubscriber } from "./types"
import { ObservableCreator } from "../util/ObservableCreator/ObservableCreator"
import { IObservableCreator } from "../util/ObservableCreator/types"

/**
 * Camera
 * Move elements relative to the character,
 * such as the background or other characters.
 */
export class Camera implements ICamera {
  private _observable: IObservableCreator<ISubscriber, ICamera>
  public distance: number
  public distanceCurrent: number
  public end: boolean

  public constructor() {
    this._observable = new ObservableCreator<ISubscriber, ICamera>()
    this.distance = 0
    this.distanceCurrent = 0
    this.end = true
  }

  public subscribe(subscriber: ISubscriber): () => void {
    return this._observable.subscribe(subscriber)
  }

  public unsubscribe(value: ISubscriber): void {
    this._observable.unsubscribe(value)
  }

  public notify(): void {
    this._observable.notify(this)
  }

  public init(distance: number = 0, distanceCurrent: number = 0): void {
    this.distance = distance
    this.distanceCurrent = distanceCurrent
    this.end = distance < distanceCurrent
  }

  public moveLeft(speed: number): void {
    if (this.end) {
      this.notify()
    } else {
      this.distanceCurrent -= speed
      this._checkDistance()

      this.notify()
    }
  }

  public moveRight(speed: number): void {
    if (this.end) {
      this.notify()
    } else {
      this.distanceCurrent += speed
      this._checkDistance()

      this.notify()
    }
  }

  public setEnd() {
    this.end = true
    this.notify()
  }

  private _checkDistance() {
    if (this.distanceCurrent >= this.distance) {
      this.setEnd()
    }
  }
}
