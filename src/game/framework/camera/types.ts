import { IObserver } from "../util/ObservableCreator/types"

export interface ICamera {
  distance: number
  distanceCurrent: number
  end: boolean
  moveLeft(speed: number): void
  moveRight(speed: number): void
  setEnd(): void
  init(distance: number, distanceCurrent?: number): void
  subscribe(subscriber: ISubscriber): () => void
  unsubscribe(subscriber: ISubscriber): void
  notify(data: this): void
}

export interface ISubscriber extends IObserver<ICamera> {}
