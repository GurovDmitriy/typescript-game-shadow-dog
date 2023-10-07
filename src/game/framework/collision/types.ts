import { IObserver } from "../util/ObservableCreator/types"

export interface ICollision {
  subscribe(subscriber: ISubscriber): () => void
  unsubscribe(subscriber: ISubscriber): void
  update(): void
}

export interface IRect {
  x: number
  y: number
  width: number
  height: number
}

export interface ISubscriber extends IObserver<undefined> {
  model: IRect
  cb(data: ISubscriber): void
}
