export interface IObservableCreator<T extends IObserver<T1>, T1> {
  subscribers: Set<T>
  subscribe(subscriber: T): () => void
  unsubscribe(value: T): void
  notify(data: T1): void
}

export interface IObserver<T> {
  update?: (data: T) => void
  addUnsubscribe?: (unsubscribe: () => void) => void
}
