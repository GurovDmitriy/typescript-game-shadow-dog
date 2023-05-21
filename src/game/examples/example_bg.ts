// import Background from "../models/Background/Background"
//
// const { canvas, ctx } = createCanvas()
//
// const bg = new Background(4, 0.4)
// bg.create()
//
// animate()
//
// function createCanvas() {
//   const canvas = document.getElementById("canvas") as HTMLCanvasElement
//   const ctx = canvas.getContext("2d")
//
//   canvas.width = 1000
//   canvas.height = 600
//
//   return { canvas, ctx }
// }
//
// function animate() {
//   if (!ctx) throw Error("Error getting context canvas")
//   ctx.clearRect(0, 0, canvas.width, canvas.height)
//
//   bg.layers[0].animate(ctx)
//   bg.layers[1].animate(ctx)
//   bg.layers[2].animate(ctx)
//   bg.layers[3].animate(ctx)
//   bg.layers[4].animate(ctx)
//
//   requestAnimationFrame(animate)
// }

export {}
