import { IObserver } from "../util/ObservableCreator/types"

export interface ICamera {
  distance: number
  distanceCurrent: number
  end: boolean
  moveLeft(speed: number, distance: number, distanceCurrent: number): void
  moveRight(speed: number, distance: number, distanceCurrent: number): void
  stop(): void
  setEnd(): void
  init(distance: number, distanceCurrent?: number): void
}

export interface ISubscriber<T> extends IObserver<T> {}
