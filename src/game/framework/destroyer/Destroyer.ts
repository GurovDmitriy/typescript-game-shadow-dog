import { IDestroyer, ISubscriber } from "./types"
import { ObservableCreator } from "../util/ObservableCreator/ObservableCreator"
import { IObservableCreator } from "../util/ObservableCreator/types"

/**
 * Destroyer
 * Destroy element outside canvas.
 */
export class Destroyer implements IDestroyer {
  private _observable: IObservableCreator<ISubscriber, undefined>
  private _canvas: HTMLCanvasElement

  public constructor(canvas: HTMLCanvasElement) {
    this._canvas = canvas
    this._observable = new ObservableCreator<ISubscriber, undefined>()
  }

  public update(): void {
    this._observable.subscribers.forEach((subscriber) => {
      if (
        subscriber.x < -200 ||
        subscriber.x > this._canvas.width + 200 ||
        subscriber.y > this._canvas.height + 50 ||
        subscriber.y < -50
      ) {
        subscriber.destroy()
      }
    })
  }

  public subscribe(subscriber: ISubscriber): () => void {
    return this._observable.subscribe(subscriber)
  }

  public unsubscribe(subscriber: ISubscriber): void {
    this._observable.unsubscribe(subscriber)
  }
}
