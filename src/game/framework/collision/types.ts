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

export interface ISubscriber {
  model: IRect
  cb(subscriber: ISubscriber): void
}
