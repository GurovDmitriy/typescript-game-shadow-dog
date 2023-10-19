import { IContextEngine } from "../engine/types"
import { IPhysics } from "./framework/physics/types"
import { ICollision } from "./framework/collision/types"
import { ICamera } from "./framework/camera/types"
import { IDestroyer } from "./framework/destroyer/types"
import { IInitializer } from "./framework/initializer/types"
import { ISwitcher } from "./framework/switcher/types"

export interface IContextGame extends IContextEngine {
  physics: IPhysics
  collision: ICollision
  camera: ICamera
  destroyer: IDestroyer
  initializer: IInitializer
  switcher: ISwitcher
}
