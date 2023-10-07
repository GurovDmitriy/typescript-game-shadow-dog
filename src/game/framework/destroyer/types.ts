import { IObserver } from "../util/ObservableCreator/types"

export interface IDestroyer {
  update(): void
  subscribe(subscriber: ISubscriber): () => void
  unsubscribe(subscriber: ISubscriber): void
}

export interface ISubscriber extends IObserver<undefined> {
  x: number
  y: number
  destroy(): void
}
