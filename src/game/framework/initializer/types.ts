export interface IInitializer {
  update(): void
}

export interface ISubscriber {
  update(): void
  addUnsubscribe(unsubscribe: () => void): void
}
