import { type IMapper } from "../Maper/Mapper"

/**
 * Animator - get values for draw animation
 */
export class Animator implements IAnimator {
  private _mapper: IMapper
  private _speed: number
  private _counter: number

  private _sx: number
  private _sy: number
  private readonly _sw: number
  private readonly _sh: number
  private readonly _dw: number
  private readonly _dh: number

  constructor(mapper: IMapper) {
    this._mapper = mapper
    this._speed = 2
    this._counter = 0

    this._sx = 0
    this._sy = 0
    this._sw = this._mapper.config.image.frameWidth
    this._sh = this._mapper.config.image.frameHeight
    this._dw = this._mapper.config.image.frameWidth / 2
    this._dh = this._mapper.config.image.frameHeight / 2
  }

  get sx(): number {
    return this._sx
  }

  get sy(): number {
    return this._sy
  }

  get sw(): number {
    return this._sw
  }

  get sh(): number {
    return this._sh
  }

  get dw(): number {
    return this._dw
  }

  get dh(): number {
    return this._dh
  }

  get width(): number {
    return this._mapper.config.image.frameWidth / 2
  }

  get height(): number {
    return this._mapper.config.image.frameHeight / 2
  }

  public run(name: string): void {
    const gap =
      Math.floor(this._counter / this._speed) %
      this._mapper.map[name].location.length

    this._sx = this._mapper.config.image.frameWidth * gap
    this._sy = this._mapper.map[name].location[gap].y

    this._counter += 1

    if (gap === this._mapper.map[name].location.length - 1) {
      this._counter = 0
    }
  }

  public updateSpeed(value: number): void {
    this._speed = value
  }
}

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
  updateSpeed(value: number): void
}
