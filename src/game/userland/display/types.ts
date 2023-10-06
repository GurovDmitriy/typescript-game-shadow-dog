import { Updatable } from "../../types"

export interface IDisplay extends Updatable {
  name?: string
  setValue(value: number): void
  draw(): void
}
