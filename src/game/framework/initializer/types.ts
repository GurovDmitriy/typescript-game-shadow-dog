import { IObserver } from "../util/ObservableCreator/types"

export interface IInitializer {
  update(): void
  subscribe(subscriber: ISubscriber): () => void
  unsubscribe(value: ISubscriber): void
}

export interface ISubscriber extends IObserver<undefined> {}
