import { IContextEngine } from "../engine/types"
import { IPhysics } from "./framework/physics/types"
import { ICollision } from "./framework/collision/types"
import { ICamera } from "./framework/camera/types"
import { IDestroyer } from "./framework/destroyer/types"

export interface IContextGame extends IContextEngine {
  physics: IPhysics
  collision: ICollision
  camera: ICamera
  destroyer: IDestroyer
}
