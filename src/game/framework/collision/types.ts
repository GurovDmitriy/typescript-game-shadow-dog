export interface ICollision {
  update(): void
  subscribe(subscriber: ISubscriber): void
  unsubscribe(index: number): void
}

export interface IRect {
  x: number
  y: number
  width: number
  height: number
}

export interface IModel extends IRect {
  addUnsubscribe(unsubscribe: () => void): void
}

export interface ISubscriber {
  model: IModel
  cb(subscriber: ISubscriber): void
}
