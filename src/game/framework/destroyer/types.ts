export interface IDestroyer {
  update(): void
  subscribe(subscriber: ISubscriber): () => void
  unsubscribe(index: number): void
}

export interface ISubscriber {
  x: number
  y: number
  destroy(): void
  addUnsubscribe(unsubscribe: () => void): void
}
