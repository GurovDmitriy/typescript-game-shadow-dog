import { IMover } from "./Mover/types"

export interface ICreatorCharacter extends IMover {
  update(): void
  addSkill(skill: { update: () => void }): void
  animate(name: string): void
  updateSpeed(speed: number): void
  updateSize(value: number): void
}
