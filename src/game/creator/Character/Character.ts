import Animator from "../../prototypes/Animator/Animator"
import { IAnimator } from "../../prototypes/Animator/types"
import Mapper from "../../prototypes/Maper/Mapper"
import { ConfigType, IMapper } from "../../prototypes/Maper/types"
import Mover from "../../prototypes/Mover/Mover"
import { IMover } from "../../prototypes/Mover/types"
import { ICharacter } from "./types"

class Character implements ICharacter, IAnimator, IMover {
  private _mapper: IMapper
  private _mover: IMover
  private _animator: IAnimator

  constructor(
    private _ctx: CanvasRenderingContext2D,
    private _image: HTMLImageElement,
    private _config: ConfigType,
    private _speed: number
  ) {}

  public create() {
    this._mapper = new Mapper(this._config).create()
    this._mover = new Mover()

    this._animator = new Animator(
      this._ctx,
      this._image,
      this._speed,
      this._mapper,
      this._mover
    )

    return this
  }

  public animate(name: string) {
    this._animator.animate(name)
  }

  public move(x: number, y: number) {
    this._mover.move(x, y)
  }

  public get x() {
    return this._mover.x
  }

  public get y() {
    return this._mover.y
  }

  public updateSize(value: number) {
    this._animator.updateSize(value)
  }

  public updateSpeed(value: number) {
    this._animator.updateSpeed(value)
  }
}

export default Character
