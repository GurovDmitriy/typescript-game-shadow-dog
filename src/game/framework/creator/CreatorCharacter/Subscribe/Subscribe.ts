import { ISubscribe, ISubscribeList, ISubscriber } from "./types"

export class Subscribe implements ISubscribe {
  public list: ISubscribeList

  constructor() {
    this.list = {}
  }

  public update() {
    Object.values(this.list).forEach((subscriber) => {
      subscriber.update()
    })
  }

  public subscribe(name: string, subscriber: ISubscriber): () => void {
    this.list[name] = subscriber
    const unsubscribe = this.unsubscribe.bind(this, name)

    return unsubscribe
  }

  public unsubscribe(name: string) {
    delete this.list[name]
  }

  public destroy() {
    this.list = {}
  }
}
