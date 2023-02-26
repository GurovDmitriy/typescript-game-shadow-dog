import Enemy4 from "./models/Enemy4/Enemy4"

const canvas = document.getElementById("canvas") as HTMLCanvasElement
const ctx = canvas.getContext("2d")

const enemy = new Enemy4(ctx, 0.2)

canvas.width = enemy.config.image.frameWidth
canvas.height = enemy.config.image.frameHeight

function animate() {
  if (!ctx) throw Error("Error getting context canvas")

  ctx.clearRect(
    0,
    0,
    enemy.config.image.frameWidth,
    enemy.config.image.frameHeight
  )

  enemy.plain()

  requestAnimationFrame(animate)
}

animate()
