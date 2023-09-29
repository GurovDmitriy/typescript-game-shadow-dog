import { IInitializer, ISubscriber } from "./types"

/**
 * Initializer - add or remove figure on game render
 */
export class Initializer implements IInitializer {
  private _subscribers: ISubscriber[]

  constructor() {
    this._subscribers = []
  }

  public update() {
    this._subscribers.forEach((subscriber) => {
      subscriber.update()
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

  public unsubscribe(index: number) {
    this._subscribers.splice(index, 1)
  }
}
