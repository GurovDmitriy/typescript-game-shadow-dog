import { IAnimator } from "../Animator/types"

export interface IDrawer extends Pick<IAnimator, "updateSize" | "updateSpeed"> {
  draw(name: string): void
}
