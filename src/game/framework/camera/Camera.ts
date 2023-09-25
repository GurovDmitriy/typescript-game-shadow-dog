export class Camera implements ICamera {
  private _subscribers: ISubscriber[]

  public constructor() {
    this._subscribers = []
  }

  public subscribe(subscriber: ISubscriber): () => void {
    this._subscribers.push(subscriber)

    return this.unsubscribe.bind(this, this._subscribers.length - 1)
  }

  public unsubscribe(index: number): void {
    this._subscribers.splice(index, 0)
  }

  public stop() {
    this._subscribers.forEach((subscriber) => {
      subscriber.model.move(0)
    })
  }

  public moveLeft(speed: number): void {
    this._subscribers.forEach((subscriber) => {
      subscriber.model.move(-speed)

      if (subscriber.cb) subscriber.cb()
    })
  }

  public moveRight(speed: number): void {
    this._subscribers.forEach((subscriber) => {
      subscriber.model.move(speed)

      if (subscriber.cb) subscriber.cb()
    })
  }
}

export interface ICamera {
  moveLeft(speed: number): void
  moveRight(speed: number): void
  stop(): void
  subscribe(subscriber: ISubscriber): () => void
  unsubscribe(index: number): void
}

export interface ISubscriber {
  model: IMover
  cb?: () => void
}

export interface IMover {
  move(speed: number): void
}
