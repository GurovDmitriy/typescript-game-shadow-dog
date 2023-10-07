import { IObserver } from "../util/ObservableCreator/types"

export interface IPhysics {
  subscribe(subscriber: ISubscriber): void
  unsubscribe(subscriber: ISubscriber): void
  update(): void
}

export interface ISubscriber extends IObserver<undefined> {
  model: { y: number }
  cb?: () => void
  cbEnd?: () => void
}
