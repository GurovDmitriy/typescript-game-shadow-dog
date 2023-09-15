import { IMover } from "./Mover/types"

export interface ICreatorCharacter extends IMover {
  update(): void
  animate(name: string): void
  subscribe(subscriber: ISubscriber): void
  updateSpeed(speed: number): void
}

export interface ISubscriber {
  update(): void
}
