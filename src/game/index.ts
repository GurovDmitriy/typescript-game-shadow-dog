import Enemy1 from "./models/Enemy1/Enemy1"
import Controller from "./prototypes/Controller/Controller"

const canvas = document.getElementById("canvas") as HTMLCanvasElement
const ctx = canvas.getContext("2d")

// TODO: change create Character
// TODO: crete controller trajectory with interface Character

const enemy1 = new Enemy1(ctx, 6)
enemy1.create()

const controller = new Controller<Enemy1>(enemy1)

canvas.width = 1000
canvas.height = 600

function animate() {
  if (!ctx) throw Error("Error getting context canvas")

  ctx.clearRect(0, 0, 1000, 600)

  controller.random().character.plain()

  // enemy1.plain()
  // trajectory.random(-1, 1)
  // enemy1.move(trajectory.xMove, trajectory.yMove)

  requestAnimationFrame(animate)
}

animate()
