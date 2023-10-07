import { IObservableCreator, IObserver } from "./types"

/**
 * ObservableCreator
 * Functionality to create a subscription.
 * The subscriber may also have the opportunity to retain unsubscribe functions in
 * order to implement destruction.
 */
export class ObservableCreator<T> implements IObservableCreator<T> {
  public subscribers: Set<IObserver<T>>

  public constructor() {
    this.subscribers = new Set()
  }

  public subscribe(subscriber: IObserver<T>): () => void {
    this.subscribers.add(subscriber)

    const unsubscribe = this.unsubscribe.bind(this, subscriber)

    if (subscriber.addUnsubscribe) {
      subscriber.addUnsubscribe(unsubscribe)
    }

    return unsubscribe
  }

  public unsubscribe(value: IObserver<T>) {
    this.subscribers.delete(value)
  }

  notify(data: T) {
    this.subscribers.forEach((subscriber) => {
      subscriber.update(data)
    })
  }
}
