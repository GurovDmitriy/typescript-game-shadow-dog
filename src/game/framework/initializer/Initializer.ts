import { IInitializer, ISubscriber } from "./types"
import { IContextGame } from "../../types"

/**
 * Controller - parse settings for save instance game figure
 */
export class Initializer implements IInitializer {
  private _subscribers: ISubscriber[]

  constructor(
    settings: { provide(context: IContextGame): ISubscriber[] },
    context: IContextGame,
  ) {
    this._subscribers = []
    const subscribers = settings.provide(context)

    subscribers.forEach((subscriber) => {
      this._subscribe(subscriber)
    })
  }

  public update() {
    this._subscribers.forEach((instance: { update: () => void }) => {
      instance.update()
    })
  }

  private _subscribe(subscriber: ISubscriber): () => void {
    this._subscribers.push(subscriber)
    const unsubscribe = this._unsubscribe.bind(
      this,
      this._subscribers.length - 1,
    )

    if (subscriber.addUnsubscribe) {
      subscriber.addUnsubscribe(unsubscribe)
    }

    return unsubscribe
  }

  private _unsubscribe(index: number) {
    this._subscribers.splice(index, 1)
  }
}
