import Enemy2 from "./models/Enemy2/Enemy2"
import Controller from "./prototypes/Controller/Controller"

const canvas = document.getElementById("canvas") as HTMLCanvasElement
const ctx = canvas.getContext("2d")

// TODO: change create Character
// TODO: crete controller trajectory with interface Character
// TODO: crete fabric methods crate many enemy

const enemy1 = new Enemy2(ctx, 6)
const enemy2 = new Enemy2(ctx, 6)
const enemy3 = new Enemy2(ctx, 6)
enemy1.create()
enemy2.create()
enemy3.create()

const controller1 = new Controller<Enemy2>(enemy1)
const controller2 = new Controller<Enemy2>(enemy2)
const controller3 = new Controller<Enemy2>(enemy3)

canvas.width = 1000
canvas.height = 600

function animate() {
  if (!ctx) throw Error("Error getting context canvas")

  ctx.clearRect(0, 0, 1000, 600)

  controller1.random().character.plain()

  requestAnimationFrame(animate)
}

animate()
