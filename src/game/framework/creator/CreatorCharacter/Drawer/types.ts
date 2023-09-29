export interface IDrawer {
  draw(): void
  setName(name: string): void
  once(value: boolean): void
  updateSpeed(speed: number): void
}
