export interface IAnimator {
  sx: number
  sy: number
  sw: number
  sh: number
  dw: number
  dh: number
  width: number
  height: number
  run(name: string): void
  once(value: boolean): void
  updateSpeed(value: number): void
}
