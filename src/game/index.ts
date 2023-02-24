import ShadowDog from "./models/ShadowDog/ShadowDog"

const canvas = document.getElementById("canvas") as HTMLCanvasElement

function Game(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d")

  const CANVAS_WIDTH = 600
  const CANVAS_HEIGHT = 600

  canvas.width = CANVAS_WIDTH
  canvas.height = CANVAS_HEIGHT

  let gameFrame = 0
  const staggerFrames = 8

  function animate() {
    if (!ctx) throw Error("Error canvas context")

    const dog = new ShadowDog(ctx)

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    dog.plain(gameFrame / staggerFrames)

    gameFrame++

    requestAnimationFrame(animate)
  }

  animate()
}

Game(canvas)

export {}
