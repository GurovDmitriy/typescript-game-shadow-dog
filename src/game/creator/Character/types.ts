export interface ICharacter {
  create(): void
  animate(name: string): void
  move(x: number, y: number): void
  updateSize(value: number): void
  updateSpeed(value: number): void
}
