export interface ISubscribe {
  update(): void
  list: { [key: string]: ISubscriber }
  subscribe(name: string, subscriber: ISubscriber): () => void
  unsubscribe(name: string): void
  destroy(): void
}

export interface ISubscriber {
  update(): void
}

export interface ISubscribeList {
  [key: string]: ISubscriber
}
