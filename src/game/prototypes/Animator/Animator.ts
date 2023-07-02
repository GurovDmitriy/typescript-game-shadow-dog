import { IMapper } from "../Maper/types"
import { IMover } from "../Mover/types"
import { IAnimator } from "./types"

class Animator implements IAnimator {
  private _counter: number

  constructor(
    private _ctx: CanvasRenderingContext2D,
    private readonly _image: HTMLImageElement,
    private _speed: number,
    private _mapper: IMapper,
    private _mover: IMover
  ) {
    this._counter = 0
  }

  public updateSpeed(value: number) {
    this._speed = value
  }

  public updateSize(value: number) {
    console.log("update size", value)
  }

  public animate(name: string) {
    const gap =
      Math.floor(this._counter / this._speed) %
      this._mapper.map[name].location.length

    this._ctx.drawImage(
      this._image,
      this._mapper.config.image.frameWidth * gap,
      this._mapper.map[name].location[gap].y,
      this._mapper.config.image.frameWidth,
      this._mapper.config.image.frameHeight,
      this._mover.x,
      this._mover.y + 323,
      this._mapper.config.image.frameWidth / 2,
      this._mapper.config.image.frameHeight / 2
    )

    this._counter += 1

    if (gap === this._mapper.map[name].location.length - 1) {
      this._counter = 0
    }
  }
}

export default Animator
