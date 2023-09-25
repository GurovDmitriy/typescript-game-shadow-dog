import { IContextGame } from "../../../Game"
import { ConfigType, Mapper } from "./Maper/Mapper"
import { Animator, IAnimator } from "./Animator/Animator"
import { IMover, Mover } from "./Mover/Mover"
import { Drawer, IDrawer } from "./Drawer/Drawer"
import {
  ISubscribe,
  ISubscribeList,
  ISubscriber,
  Subscribe,
} from "./Subscribe/Subscribe"
import {
  IUnsubscribe,
  Unsubscribe,
  UnsubscribeType,
} from "./Unsubscribe/Unsubscribe"

export interface ICreatorCharacter {
  width: number
  height: number
  x: number
  y: number
  subscribeList: ISubscribeList
  move(x: number, y: number): void
  update(): void
  animate(name: string): void
  subscribe(name: string, subscriber: ISubscriber): void
  unsubscribe(name: string): void
  addUnsubscribe(unsubscribe: UnsubscribeType): void
  updateSpeed(speed: number): void
  destroy(): void
}

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
    return this._subscribe.subscribe(name, subscriber)
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

  public updateSpeed(value: number): void {
    this._drawer.updateSpeed(value)
  }
}
