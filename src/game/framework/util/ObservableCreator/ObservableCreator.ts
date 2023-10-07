import { IObservableCreator, IObserver } from "./types"

/**
 * ObservableCreator
 * Functionality to create a subscription.
 * The subscriber may also have the opportunity to retain unsubscribe functions in
 * order to implement destruction.
 */
export class ObservableCreator<T extends IObserver<T1>, T1>
  implements IObservableCreator<T, T1>
{
  public subscribers: Set<T>

  public constructor() {
    this.subscribers = new Set()
  }

  public subscribe(subscriber: T): () => void {
    this.subscribers.add(subscriber)

    const unsubscribe = this.unsubscribe.bind(this, subscriber)

    if (subscriber.addUnsubscribe) {
      subscriber.addUnsubscribe(unsubscribe)
    }

    return unsubscribe
  }

  public unsubscribe(value: T) {
    this.subscribers.delete(value)
  }

  notify(data: T1) {
    this.subscribers.forEach((subscriber) => {
      if (subscriber.update) {
        subscriber.update(data)
      }
    })
  }
}
