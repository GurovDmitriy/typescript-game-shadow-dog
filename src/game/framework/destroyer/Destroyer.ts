import { IDestroyer, ISubscriber } from "./types"

export class Destroyer implements IDestroyer {
  private _list: ISubscriber[]
  private _canvas: HTMLCanvasElement

  public constructor(canvas: HTMLCanvasElement) {
    this._list = []
    this._canvas = canvas
  }

  public update(): void {
    this._list.forEach((subscriber) => {
      if (
        (subscriber.x < -50 && subscriber.x > this._canvas.width + 50) ||
        (subscriber.y < -50 && subscriber.y > this._canvas.height + 50)
      ) {
        subscriber.destroy()
      }
    })
  }

  public subscribe(subscriber: ISubscriber): () => void {
    this._list.push(subscriber)
    const unsubscribe = this.unsubscribe.bind(this, this._list.length - 1)

    if (subscriber.addUnsubscribe) {
      subscriber.addUnsubscribe(unsubscribe)
    }
    return unsubscribe
  }

  public unsubscribe(index: number): void {
    this._list.splice(index, 1)
  }
}
