import { IMover } from "../creator/CreatorCharacter/Mover/types"

export interface ISubscriber {
  model: IMover
  cb?: () => void
  cbEnd?: () => void
}

export interface IPhysics {
  subscribe(subscriber: ISubscriber): void
  update(): void
}
