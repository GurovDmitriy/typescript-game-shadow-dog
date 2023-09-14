import { Mapper } from "./Maper/Mapper"
import { Mover } from "./Mover/Mover"
import { Animator } from "./Animator/Animator"
import { Drawer } from "./Drawer/Drawer"
import { ICreatorCharacter } from "./types"
import { IDrawer } from "./Drawer/types"
import { IMover } from "./Mover/types"
import { ConfigType } from "./Maper/types"
import { IContextGame } from "../../../types"
import { ISkill } from "../../skill/types"

/**
 * Character - decorator for extends game figure
 */
export class CreatorCharacter implements ICreatorCharacter {
  private _drawer: IDrawer
  private readonly _mover: IMover
  private _name: string
  public skillList: ISkill[]

  constructor(
    config: ConfigType,
    image: HTMLImageElement,
    context: IContextGame,
  ) {
    const mapper = new Mapper(config)
    const animator = new Animator(mapper)
    this._mover = new Mover()
    this._drawer = new Drawer(animator, this._mover, image, context)
    this.skillList = []
  }

  public update(): void {
    this.skillList.forEach((skill) => {
      skill.update()
    })

    this._drawer.draw(this._name)
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

  public addSkill(skill: ISkill): void {
    this.skillList.push(skill)
  }

  public updateSpeed(value: number): void {
    this._drawer.updateSpeed(value)
  }

  public updateSize(value: number): void {
    console.log("updateSize", value)
  }
}
