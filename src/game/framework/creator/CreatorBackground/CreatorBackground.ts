import { Drawer, IDrawer } from "./Drawer/Drawer"
import { type IContextGame } from "../../../Game"
import { Animator } from "./Animator/Animator"

/**
 * CreatorBackground - decorator for create bg layers and draw in canvas
 */
export class CreatorBackground implements ICreatorBackground {
  private _drawerList: IDrawer[]

  constructor(config: BgConfig[], context: IContextGame) {
    this._drawerList = config.map(
      (item) =>
        new Drawer(
          new Animator(item.width, item.height, item.speedModifier),
          item.image,
          context.ctx,
        ),
    )

    this.updateSpeed(0)
  }

  update(): void {
    this._drawerList.forEach((drawer) => {
      drawer.draw()
    })
  }

  updateSpeed(speed: number): void {
    this._drawerList.forEach((drawer) => {
      drawer.updateSpeed(speed)
    })
  }
}

export interface ICreatorBackground {
  update(): void
  updateSpeed(speed: number): void
}

export type BgConfig = {
  image: HTMLImageElement
  width: number
  height: number
  speedModifier: number
}
