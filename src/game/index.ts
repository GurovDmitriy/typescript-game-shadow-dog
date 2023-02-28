import ShadowDog from "./models/ShadowDog/ShadowDog"
import { ActionShadowDog } from "./models/ShadowDog/types"

const canvas = document.getElementById("canvas") as HTMLCanvasElement
const ctx = canvas.getContext("2d")

const dog = new ShadowDog(ctx, 8)
dog.create()

canvas.width = 1000
canvas.height = 600

// function randomInteger(min, max) {
//   const rand = min + Math.random() * (max + 1 - min)
//   return Math.floor(rand)
// }

let dogView = "plain"

document.addEventListener("keydown", (evt) => {
  console.log(evt.key)

  switch (evt.key) {
    case "ArrowUp":
      dogView = ActionShadowDog.jump
      break

    case "ArrowDown":
      dogView = ActionShadowDog.sit
      break

    case "ArrowRight":
      dog.moveRight(10)
      dogView = ActionShadowDog.run
      break

    case "ArrowLeft":
      dogView = ActionShadowDog.sit
      break
  }
})

document.addEventListener("keyup", (evt) => {
  console.log(evt.key)

  switch (evt.key) {
    case "ArrowUp":
      dogView = ActionShadowDog.plain
      break

    case "ArrowDown":
      dogView = ActionShadowDog.plain
      break

    case "ArrowRight":
      dogView = ActionShadowDog.plain
      break

    case "ArrowLeft":
      dogView = ActionShadowDog.plain
      break
  }
})

function animate() {
  if (!ctx) throw Error("Error getting context canvas")

  ctx.clearRect(0, 0, 1000, 600)

  dog[dogView]()

  requestAnimationFrame(animate)
}

animate()
