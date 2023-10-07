export interface IObservableCreator<T> {
  subscribers: Set<IObserver<T>>
  subscribe(subscriber: IObserver<T>): () => void
  unsubscribe(value: IObserver<T>): void
  notify(data: T): void
}

export interface IObserver<T> {
  update(data: T): void
  addUnsubscribe?: (unsubscribe: () => void) => void
}
