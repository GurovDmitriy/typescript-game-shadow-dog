const circle1 = { x: 10, y: 10, radius: 300 }
const circle2 = { x: 500, y: 500, radius: 150 }

const dx = circle2.x - circle1.x
const dy = circle2.y - circle1.y
const distance = Math.sqrt(dx * dx + dy * dy)
const sum = circle1.radius + circle2.radius

if (distance > sum) {
  console.log("no collision")
} else if (distance === sum) {
  console.log("contact")
} else {
  console.log("collision")
}

export {}
