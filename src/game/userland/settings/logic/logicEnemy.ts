import { IContextGame } from "../../../types"
import { AdapterCameraEnemy1 } from "../../model/Enemy1/AdapterCameraEnemy1"
import { Bite } from "../../skill/Bite/Bite"
import { CreatorCharacter } from "../../../framework/creator/CreatorCharacter/CreatorCharacter"
import { Enemy1 } from "../../model/Enemy1/Enemy1"
import { Health } from "../../skill/Health/Health"

export function logicEnemy(context: IContextGame, enemy: Enemy1) {
  context.destroyer.subscribe(enemy)

  const adapterCameraEnemy = new AdapterCameraEnemy1(enemy)
  context.camera.subscribe({
    model: adapterCameraEnemy,
    cb: () => {},
  })

  context.collision.subscribe({
    model: enemy,
    cb: (model) => {
      if (model) {
        const bite = enemy.subscribeList.bite as Bite
        bite.make(model as CreatorCharacter, 25, 1000, 1000)
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
