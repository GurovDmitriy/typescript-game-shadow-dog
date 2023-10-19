import { Enemy1 } from "../../model/Enemy1/Enemy1"
import { Enemy2 } from "../../model/Enemy2/Enemy2"
import { Enemy3 } from "../../model/Enemy3/Enemy3"
import { Enemy4 } from "../../model/Enemy4/Enemy4"
import { getRandomInteger } from "../../../../utils/getRandomInteger"
import { ICamera } from "../../../framework/camera/types"
import { AI } from "../../ai/AI"
import { logicEnemy } from "../logic/logicEnemy"
import { IContextGame } from "../../../types"

export function generateEnemy(context: IContextGame) {
  const enemyType = [Enemy1, Enemy2, Enemy3, Enemy4]
  const enemyDensity = (distance: number, distanceCurrent: number): boolean =>
    (distance - distanceCurrent) % 200 === 0
  const getRandomEnemy = () =>
    new enemyType[getRandomInteger(0, enemyType.length - 1)](context)
  const getRandomPositionEnemy = (): [x: number, y: number] => [
    getRandomInteger(context.canvas.width - 50, context.canvas.width - 100),
    getRandomInteger(-100, 400),
  ]

  context.camera.subscribe({
    update(data: ICamera) {
      if (enemyDensity(data.distance, data.distanceCurrent)) {
        const enemy = getRandomEnemy()
        enemy.plain()
        enemy.move(...getRandomPositionEnemy())

        enemy.subscribe("ai", new AI(enemy, "random"))

        logicEnemy(context, enemy)

        context.initializer.subscribe(enemy)
      }
    },
  })
}
