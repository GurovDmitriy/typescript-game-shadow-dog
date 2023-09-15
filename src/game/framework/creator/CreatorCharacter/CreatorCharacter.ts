import { Mapper } from "./Maper/Mapper"
import { Mover } from "./Mover/Mover"
import { Animator } from "./Animator/Animator"
import { Drawer } from "./Drawer/Drawer"
import { ICreatorCharacter, ISubscriber } from "./types"
import { IDrawer } from "./Drawer/types"
import { IMover } from "./Mover/types"
import { ConfigType } from "./Maper/types"
import { IContextGame } from "../../../types"

/**
 * Character - abstract for extends game figure
 */
export class CreatorCharacter implements ICreatorCharacter {
  private _drawer: IDrawer
  private readonly _mover: IMover
  private _name: string
  public subscriberList: ISubscriber[]

  constructor(
    config: ConfigType,
    image: HTMLImageElement,
    context: IContextGame,
  ) {
    const mapper = new Mapper(config)
    const animator = new Animator(mapper)
    this._mover = new Mover()
    this._drawer = new Drawer(animator, this._mover, image, context)
    this.subscriberList = []
  }

  public update(): void {
    this.subscriberList.forEach((subscriber) => {
      subscriber.update()
    })

    this._drawer.draw(this._name)
  }

  public subscribe(subscriber: ISubscriber) {
    this.subscriberList.push(subscriber)
  }

  public animate(name: string): void {
    this._name = name
  }

  get x(): number {
    return this._mover.x
  }

  get y(): number {
    return this._mover.y
  }

  set x(value: number) {
    this._mover.x = value
  }

  set y(value: number) {
    this._mover.y = value
  }

  public move(x: number, y: number): void {
    this._mover.move(x, y)
  }

  public updateSpeed(value: number): void {
    this._drawer.updateSpeed(value)
  }
}
