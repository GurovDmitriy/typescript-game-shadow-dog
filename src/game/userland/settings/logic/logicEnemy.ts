import { IContextGame } from "../../../types"
import { AdapterCameraEnemy1 } from "../../model/Enemy1/AdapterCameraEnemy1"
import { Bite } from "../../skill/Bite/Bite"
import { CreatorCharacter } from "../../../framework/creator/CreatorCharacter/CreatorCharacter"
import { Enemy1 } from "../../model/Enemy1/Enemy1"

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
        bite.make(model as CreatorCharacter, 10, 2000)
      }
    },
  })

  enemy.subscribe(
    "bite",
    new Bite(
      enemy,
      () => {},
      () => {},
    ),
  )
}
