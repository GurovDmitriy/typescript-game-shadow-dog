export class Collision {
  public square(rect1: Rect, rect2: Rect) {
    if (
      rect1.x > rect2.x + rect2.width ||
      rect1.x + rect1.width > rect2.x ||
      rect1.y > rect2.y + rect2.height ||
      rect1.y + rect1.height < rect2.y
    ) {
      console.log("no collision")
      return false
    } else {
      console.log("collision")
      return true
    }
  }

  public circle(circle1: Circle, circle2: Circle) {
    const dx = circle2.x - circle1.x
    const dy = circle2.y - circle1.y

    const distance = Math.sqrt(dx * dx + dy * dy)
    const sumOfRadius = circle1.radius + circle2.radius

    if (distance < sumOfRadius) {
      console.log("collision")
      return true
    } else if (distance === sumOfRadius) {
      console.log("touching")
    } else {
      console.log("no collision")
      return false
    }
  }
}

type Rect = {
  x: number
  y: number
  width: number
  height: number
}

type Circle = {
  x: number
  y: number
  radius: number
}
