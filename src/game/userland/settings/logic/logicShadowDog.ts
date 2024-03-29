import { IContextGame } from "../../../types"
import { ShadowDog } from "../../model/ShadowDog/ShadowDog"
import { Run } from "../../skill/Run/Run"
import { Jump } from "../../skill/Jump/Jump"
import { Health } from "../../skill/Health/Health"
import { Bite } from "../../skill/Bite/Bite"
import { ICreatorCharacter } from "../../../framework/creator/CreatorCharacter/types"
import { Roll } from "../../skill/Roll/Roll"
import { Sit } from "../../skill/Sit/Sit"
import { COMMAND_GAME } from "../../../framework/switcher/types"

export function logicShadowDog(context: IContextGame, shadowDog: ShadowDog) {
  context.physics.subscribe({
    model: shadowDog,
    cb: () => shadowDog.fall(),
    cbEnd: () => shadowDog.plain(),
  })

  context.collision.subscribe({
    model: shadowDog,
    cb: (model) => {
      const bite = shadowDog.subscribeList.bite as Bite
      const roll = shadowDog.subscribeList.roll as Roll

      if (bite.active) {
        bite.bind(model as unknown as { model: ICreatorCharacter })
      }

      if (roll.active) {
        roll.bind(model as unknown as { model: ICreatorCharacter })
      }
    },
  })

  shadowDog.subscribe(
    "health",
    new Health(
      shadowDog,
      () => {
        settings.health.cb()
      },
      () => {
        settings.health.destroy()
      },
      () => {
        settings.health.update()
      },
    ),
  )

  shadowDog.subscribe(
    "run",
    new Run(
      shadowDog,
      () => {
        context.camera.moveRight(10)
        shadowDog.run()
      },
      () => {
        context.camera.stop()
        shadowDog.plain()
      },
    ),
  )

  shadowDog.subscribe(
    "jump",
    new Jump(
      shadowDog,
      () => shadowDog.jump(),
      () => shadowDog.plain(),
    ),
  )

  shadowDog.subscribe(
    "bite",
    new Bite(
      shadowDog,
      () => shadowDog.bite(),
      () => shadowDog.plain(),
    ),
  )

  shadowDog.subscribe(
    "roll",
    new Roll(
      shadowDog,
      () => {
        shadowDog.roll()
      },
      () => {
        shadowDog.plain()
      },
    ),
  )

  shadowDog.subscribe(
    "sit",
    new Sit(
      shadowDog,
      () => shadowDog.sit(),
      () => shadowDog.plain(),
    ),
  )

  const settings = getSettings()

  function getSettings(): { [key: string]: { [key: string]: () => void } } {
    const health = shadowDog.subscribeList.health as Health

    function getHealthCb() {
      return () => {
        shadowDog.struck()
        setTimeout(() => shadowDog.plain(), 200)

        if (health.value === 0) {
          if (context.switcher.status === COMMAND_GAME.start) {
            context.switcher.execute("restart")
          }
        }
      }
    }

    function getHealthDestroy() {
      return () => {
        shadowDog.plain()
      }
    }

    function getHealthUpdate() {
      let once = false

      return () => {
        if (health.value < 50 && !once) {
          shadowDog.dizzy()
          setTimeout(() => {
            once = true
            shadowDog.plain()
          }, 2000)
        }

        if (health.value === 0) {
          shadowDog.once(true).ko()
        }
      }
    }

    return {
      health: {
        cb: getHealthCb(),
        destroy: getHealthDestroy(),
        update: getHealthUpdate(),
      },
    }
  }
}
