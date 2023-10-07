export interface ISubscribe {
  update(): void
  subscribers: { [key: string]: ISubscriber }
  subscribe(name: string, subscriber: ISubscriber): () => void
  unsubscribe(name: string): void
  destroy(): void
}

export interface ISubscriber {
  update(): void
}

export interface ISubscribers {
  [key: string]: ISubscriber
}
