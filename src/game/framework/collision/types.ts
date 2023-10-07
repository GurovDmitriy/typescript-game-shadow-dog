export interface ICollision {
  subscribe(subscriber: ISubscriber): () => void
  unsubscribe(subscriber: ISubscriber): void
  update(): void
}

export interface IRect {
  x: number
  y: number
  width: number
  height: number
}

export interface ISubscriber extends IRect {
  update(data: ISubscriber): void
  addUnsubscribe?: (unsubscribe: () => void) => void
}
