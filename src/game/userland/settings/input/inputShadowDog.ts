import { IContextGame } from "../../../types"
import { ShadowDog } from "../../model/ShadowDog/ShadowDog"
import { BTN } from "../../../../engine/types"
import { Run } from "../../skill/Run/Run"
import { Jump } from "../../skill/Jump/Jump"
import { Bite } from "../../skill/Bite/Bite"
import { Roll } from "../../skill/Roll/Roll"
import { Sit } from "../../skill/Sit/Sit"

export function inputShadowDog(context: IContextGame, shadowDog: ShadowDog) {
  const run = shadowDog.subscribeList.run as Run
  const jump = shadowDog.subscribeList.jump as Jump
  const bite = shadowDog.subscribeList.bite as Bite
  const roll = shadowDog.subscribeList.roll as Roll
  const sit = shadowDog.subscribeList.sit as Sit

  context.keyboard.define(
    BTN.d,
    () => {
      if (roll.active) return

      run.make()
    },
    () => {
      if (roll.active) return

      run.destroy()
    },
    true,
  )

  context.keyboard.define(
    BTN.w,
    () => {
      jump.make(200)
    },
    () => {
      jump.destroy()
    },
  )

  context.keyboard.define(
    BTN.q,
    () => {
      jump.make(400)
    },
    () => {
      jump.destroy()
    },
  )

  context.keyboard.define(
    BTN.e,
    () => {
      bite.make(null, 50, 200)
    },
    () => {
      bite.destroy()
    },
  )

  context.keyboard.define(
    BTN.space,
    () => {
      if (run.active) return
      if (jump.active) return

      roll.make(null, 100, 1000)
    },
    () => {
      if (run.active) return
      if (jump.active) return

      roll.destroy()
    },
  )

  context.keyboard.define(
    BTN.s,
    () => {
      sit.make()
    },
    () => {
      sit.destroy()
    },
  )
}
