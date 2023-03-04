export interface ILayer {
  animate(ctx: CanvasRenderingContext2D): void
  updateSpeed(speedGame: number, speedModifier: number): void
}

export type Config = { width: number; height: number }
