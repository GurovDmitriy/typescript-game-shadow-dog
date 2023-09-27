export interface IAnimator {
  readonly width: number
  readonly height: number
  readonly x: number
  readonly y: number
  readonly x2: number

  run(): void
  updateSpeed(speed: number): void
}
