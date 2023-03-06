import Enemy2 from "./models/Enemy2/Enemy2"
import Controller from "./prototypes/Controller/Controller"

const canvas = document.getElementById("canvas") as HTMLCanvasElement
const ctx = canvas.getContext("2d")

// TODO: change create Character
// TODO: crete controller trajectory with interface Character

const enemy = new Enemy2(ctx, 6)
enemy.create()

const controller = new Controller<Enemy2>(enemy)

canvas.width = 1000
canvas.height = 600

function animate() {
  if (!ctx) throw Error("Error getting context canvas")

  ctx.clearRect(0, 0, 1000, 600)

  controller.round().character.plain()

  // enemy1.plain()
  // trajectory.random(-1, 1)
  // enemy1.move(trajectory.xMove, trajectory.yMove)

  requestAnimationFrame(animate)
}

animate()
