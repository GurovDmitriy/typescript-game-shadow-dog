import { IContextEngine } from "../engine/types"
import { IPhysics } from "./framework/physics/types"

export interface IContextGame extends IContextEngine {
  physics: IPhysics
}
