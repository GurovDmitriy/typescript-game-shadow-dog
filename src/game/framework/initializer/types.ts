export interface IInitializer {
  update(): void
  subscribe(subscriber: ISubscriber): () => void
  unsubscribe(index: number): void
}

export interface ISubscriber {
  update(): void
  addUnsubscribe?: (unsubscribe: () => void) => void
}
