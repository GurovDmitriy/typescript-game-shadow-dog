import { IDrawer } from "./Drawer/types"
import { Drawer } from "./Drawer/Drawer"
import { Animator } from "./Animator/Animator"
import { BgConfig, ICreatorBackground } from "./types"
import { IContextGame } from "../../../types"

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
  }

  update(): void {
    this._drawerList.forEach((drawer) => {
      drawer.draw()
    })
  }

  run(): void {
    this.updateSpeed(4)
  }

  plain(): void {
    this.updateSpeed(0)
  }

  updateSpeed(speed: number): void {
    this._drawerList.forEach((drawer) => {
      drawer.updateSpeed(speed)
    })
  }
}
