import ShadowDog from "./models/ShadowDog/ShadowDog"

const { canvas, ctx } = createCanvas()

const dog = new ShadowDog(ctx, 3)
dog.create()

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

  dog.sit()

  requestAnimationFrame(animate)
}

export {}
