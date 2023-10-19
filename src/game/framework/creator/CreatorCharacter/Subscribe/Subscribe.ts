import { ISubscribe, ISubscribers, ISubscriber } from "./types"

/**
 * Subscribe
 * Create a behavior for the character,
 * each subscriber will be called when updating.
 */
export class Subscribe implements ISubscribe {
  public subscribers: ISubscribers

  constructor() {
    this.subscribers = {}
  }

  public update(): void {
    Object.values(this.subscribers).forEach((subscriber) => {
      subscriber.update()
    })
  }

  public subscribe(name: string, subscriber: ISubscriber): () => void {
    this.subscribers[name] = subscriber
    const unsubscribe = this.unsubscribe.bind(this, name)

    return unsubscribe
  }

  public unsubscribe(name: string): void {
    delete this.subscribers[name]
  }

  public destroy(): void {
    this.subscribers = {}
  }
}
