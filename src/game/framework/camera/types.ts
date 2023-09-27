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
