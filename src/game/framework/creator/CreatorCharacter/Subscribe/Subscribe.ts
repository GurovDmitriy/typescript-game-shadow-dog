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

    return this.unsubscribe.bind(this, name)
  }

  public unsubscribe(name: string) {
    delete this.list[name]
  }

  public destroy() {
    this.list = {}
  }
}
