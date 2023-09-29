import { IUnsubscribe, UnsubscribeType } from "./Unsubscribe/types"
import { IDrawer } from "./Drawer/types"
import { IAnimator } from "./Animator/types"
import { IMover } from "./Mover/types"
import { ConfigType } from "./Maper/types"
import { Mapper } from "./Maper/Mapper"
import { Animator } from "./Animator/Animator"
import { Mover } from "./Mover/Mover"
import { Drawer } from "./Drawer/Drawer"
import { Subscribe } from "./Subscribe/Subscribe"
import { Unsubscribe } from "./Unsubscribe/Unsubscribe"
import { ICreatorCharacter } from "./types"
import { ISubscribe, ISubscriber } from "./Subscribe/types"
import { IContextGame } from "../../../types"

/**
 * Character - abstract for extends game figure
 */
export abstract class CreatorCharacter implements ICreatorCharacter {
  private _drawer: IDrawer
  private readonly _animator: IAnimator
  private readonly _mover: IMover
  private _subscribe: ISubscribe
  private _unsubscribe: IUnsubscribe

  protected constructor(
    config: ConfigType,
    image: HTMLImageElement,
    context: IContextGame,
  ) {
    const mapper = new Mapper(config)
    this._animator = new Animator(mapper)
    this._mover = new Mover()
    this._drawer = new Drawer(this._animator, this._mover, image, context)
    this._subscribe = new Subscribe()
    this._unsubscribe = new Unsubscribe()
  }

  public update(): void {
    this._subscribe.update()
    this._drawer.draw()
  }

  get subscribeList() {
    return this._subscribe.list
  }

  public subscribe(name: string, subscriber: ISubscriber): () => void {
    const unsubscribe = this._subscribe.subscribe(name, subscriber)

    this.addUnsubscribe(unsubscribe)

    return unsubscribe
  }

  public unsubscribe(name: string) {
    this._subscribe.unsubscribe(name)
  }

  public addUnsubscribe(unsubscribe: UnsubscribeType): void {
    this._unsubscribe.add(unsubscribe)
  }

  public animate(name: string): void {
    this._drawer.setName(name)
  }

  get x(): number {
    return this._mover.x
  }

  get y(): number {
    return this._mover.y
  }

  get width(): number {
    return this._animator.width
  }

  get height(): number {
    return this._animator.height
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

  public destroy(): void {
    this._subscribe.destroy()
    this._unsubscribe.destroy()
  }

  public once(value: boolean): this {
    this._drawer.once(value)

    return this
  }

  public updateSpeed(value: number): void {
    this._drawer.updateSpeed(value)
  }
}
