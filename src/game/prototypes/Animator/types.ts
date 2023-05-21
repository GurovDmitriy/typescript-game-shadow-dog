export interface IAnimator {
  animate(name: string): void
  updateSpeed(value: number): void
  updateSize(value: number): void
}
