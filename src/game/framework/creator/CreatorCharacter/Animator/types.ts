export interface IAnimator {
  sx: number
  sy: number
  sw: number
  sh: number
  dw: number
  dh: number
  run(name: string): void
  updateSpeed(value: number): void
}
