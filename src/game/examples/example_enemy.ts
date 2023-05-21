import Controller from "../models/Controller/Controller"
import Enemy1 from "../models/Enemy1/Enemy1"

const { canvas, ctx } = createCanvas()

const enemy1 = new Enemy1(ctx, 6).create()

const controllerEnemy = new Controller<Enemy1>(enemy1)

animate()

function createCanvas() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement
  const ctx = canvas.getContext("2d")

  canvas.width = 1000
  canvas.height = 600

  return { canvas, ctx }
}

function animate() {
  if (!ctx) throw Error("Error getting context canvas")
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  enemy1.plain()
  controllerEnemy.random()

  requestAnimationFrame(animate)
}

export {}
