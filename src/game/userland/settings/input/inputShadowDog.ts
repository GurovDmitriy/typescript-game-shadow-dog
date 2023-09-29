import { IContextGame } from "../../../types"
import { ShadowDog } from "../../model/ShadowDog/ShadowDog"
import { BTN } from "../../../../engine/types"
import { Run } from "../../skill/Run/Run"
import { Jump } from "../../skill/Jump/Jump"

export function inputShadowDog(context: IContextGame, shadowDog: ShadowDog) {
  context.keyboard.define(
    BTN.d,
    () => {
      const run = shadowDog.subscribeList.run as Run
      run.make()
    },
    () => {
      const run = shadowDog.subscribeList.run as Run
      run.destroy()
    },
    true,
  )

  context.keyboard.define(
    BTN.w,
    () => {
      const jump = shadowDog.subscribeList.jump as Jump
      jump.make(200)
    },
    () => {
      const jump = shadowDog.subscribeList.jump as Jump
      jump.destroy()
    },
  )

  context.keyboard.define(
    BTN.q,
    () => {
      const jump = shadowDog.subscribeList.jump as Jump
      jump.make(400)
    },
    () => {
      const jump = shadowDog.subscribeList.jump as Jump
      jump.destroy()
    },
  )
}
