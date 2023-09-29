export interface ICamera {
  moveLeft(speed: number): void
  moveRight(speed: number): void
  stop(): void
  subscribe(subscriber: ISubscriber): () => void
  unsubscribe(index: number): void
}

export interface ISubscriber {
  model: IModel
  cb?: () => void
}

export interface IModel {
  move(speed: number): void
  addUnsubscribe?: (unsubscribe: () => void) => void
}
