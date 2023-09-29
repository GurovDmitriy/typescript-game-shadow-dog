import { ISubscribeList, ISubscriber } from "./Subscribe/types"
import { UnsubscribeType } from "./Unsubscribe/types"

export interface ICreatorCharacter {
  width: number
  height: number
  x: number
  y: number
  subscribeList: ISubscribeList
  move(x: number, y: number): void
  update(): void
  animate(name: string): void
  subscribe(name: string, subscriber: ISubscriber): void
  unsubscribe(name: string): void
  addUnsubscribe(unsubscribe: UnsubscribeType): void
  updateSpeed(speed: number): void
  once(value: boolean): void
  destroy(): void
}
