import { IContextGame } from "../../../types"
import { ShadowDog } from "../../model/ShadowDog/ShadowDog"
import { Run } from "../../skill/Run/Run"
import { Jump } from "../../skill/Jump/Jump"
import { Health } from "../../skill/Health/Health"

export function logicShadowDog(context: IContextGame, shadowDog: ShadowDog) {
  const settings = getSettings()

  context.physics.subscribe({
    model: shadowDog,
    cb: () => shadowDog.fall(),
    cbEnd: () => shadowDog.plain(),
  })

  context.collision.subscribe({
    model: shadowDog,
    cb: () => {},
  })

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
    "health",
    new Health(
      shadowDog,
      () => {
        shadowDog.struck()
        setTimeout(() => shadowDog.plain(), 200)
      },
      () => {
        shadowDog.plain()
      },
      () => {
        settings.health()
      },
    ),
  )

  function getSettings(): { [key: string]: () => void } {
    function getHealth() {
      let once = false

      return () => {
        const health = shadowDog.subscribeList.health as Health

        if (health.value < 50 && !once) {
          shadowDog.dizzy()
          setTimeout(() => {
            once = true
            shadowDog.plain()
          }, 2000)
        }

        if (health.value === 0) {
          shadowDog.once(true).ko()
          // TODO: game over logic call... from context...
        }
      }
    }

    return {
      health: getHealth(),
    }
  }
}
