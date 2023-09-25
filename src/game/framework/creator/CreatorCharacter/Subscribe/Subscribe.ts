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

  public subscribe<T1 extends ISubscriber, T2 extends string>(
    name: T2,
    subscriber: T1,
  ): () => void {
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

export interface ISubscribe {
  update(): void
  list: { [key: string]: ISubscriber }
  subscribe(name: string, subscriber: ISubscriber): () => void
  unsubscribe(name: string): void
  destroy(): void
}

export interface ISubscriber {
  update(): void
}

export interface ISubscribeList {
  [key: string]: ISubscriber
}
