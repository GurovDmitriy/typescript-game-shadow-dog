import Enemy1 from "./models/Enemy1/Enemy1"

const canvas = document.getElementById("canvas") as HTMLCanvasElement
const ctx = canvas.getContext("2d")

const enemy = new Enemy1(ctx, 6)
canvas.width = 800
canvas.height = 800

const xMove = canvas.width
const yMove = 0

function movePattern1() {
  enemy.move(xMove, 0)
}

function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}

function animate() {
  if (!ctx) throw Error("Error getting context canvas")

  ctx.clearRect(0, 0, 800, 800)

  enemy.plain()
  movePattern1()

  requestAnimationFrame(animate)
}

animate()
