import { IDestroyer, ISubscriber } from "./types"

export class Destroyer implements IDestroyer {
  private readonly _subscribers: ISubscriber[]
  private _canvas: HTMLCanvasElement

  public constructor(canvas: HTMLCanvasElement) {
    this._subscribers = []
    this._canvas = canvas
  }

  public update(): void {
    this._subscribers.forEach((subscriber) => {
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
    this._subscribers.push(subscriber)
    const unsubscribe = this.unsubscribe.bind(
      this,
      this._subscribers.length - 1,
    )

    if (subscriber.addUnsubscribe) {
      subscriber.addUnsubscribe(unsubscribe)
    }
    return unsubscribe
  }

  public unsubscribe(index: number): void {
    this._subscribers.splice(index, 1)
  }
}
