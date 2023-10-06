export interface IDisplay {
  name: string
  draw(): void
  update(): void
}

export interface IModel {
  value: number | string
  amount?: number
}

export type PositionType = {
  x: number
  y: number
}
