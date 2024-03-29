import { IContextGame } from "../../../types"
import { AdapterCameraEnemy } from "../../adapters/camera/AdapterCameraEnemy"
import { Bite } from "../../skill/Bite/Bite"
import { Enemy1 } from "../../model/Enemy1/Enemy1"
import { Health } from "../../skill/Health/Health"
import { ICreatorCharacter } from "../../../framework/creator/CreatorCharacter/types"

export function logicEnemy(context: IContextGame, enemy: Enemy1) {
  context.destroyer.subscribe(enemy)

  const adapterCameraEnemy = new AdapterCameraEnemy(enemy)
  context.camera.subscribe(adapterCameraEnemy)

  context.collision.subscribe({
    model: enemy,
    cb: (model) => {
      if (model) {
        const bite = enemy.subscribeList.bite as Bite
        const m = model as unknown as { model: ICreatorCharacter }

        if (bite) bite.make(m, 10, 1000, 100)
      }
    },
  })

  enemy.subscribe(
    "health",
    new Health(
      enemy,
      () => {
        enemy.plain()
      },
      () => {},
      () => {
        const health = enemy.subscribeList.health as Health
        if (health.value === 0) {
          enemy.destroy()
        }
      },
    ),
  )

  enemy.subscribe(
    "bite",
    new Bite(
      enemy,
      () => {},
      () => {},
    ),
  )
}
