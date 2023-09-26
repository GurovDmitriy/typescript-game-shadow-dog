export interface IPhysics {
  subscribe(subscriber: ISubscriber): void
  unsubscribe(index: number): void
  update(): void
}

export interface ISubscriber {
  model: IMover
  cb?: () => void
  cbEnd?: () => void
}

export interface IMover {
  y: number
}

export class Physics implements IPhysics {
  private _subscribers: ISubscriber[]

  public constructor() {
    this._subscribers = []
  }

  public subscribe(subscriber: ISubscriber): () => void {
    this._subscribers.push(subscriber)

    return this.unsubscribe.bind(this, this._subscribers.length - 1)
  }

  public unsubscribe(index: number) {
    this._subscribers.splice(index, 0)
  }

  public update(): void {
    this._subscribers.forEach((item) => {
      if (item.model.y !== 0) {
        if (item.cb && typeof item.cb === "function") item.cb()

        if (item.model.y + 6 < 0) {
          item.model.y = -6
        } else {
          const distance = item.model.y
          item.model.y = distance

          if (item.cbEnd && typeof item.cbEnd === "function") item.cbEnd()
        }
      }
    })
  }
}
