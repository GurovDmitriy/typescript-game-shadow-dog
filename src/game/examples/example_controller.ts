// class Controller<T extends IMover> {
//   private _x: number
//   private _y: number
//   private _angle: number
//   public character: T
//
//   constructor(character: T) {
//     this._x = 0
//     this._y = 0
//     this._angle = 0
//     this.character = character
//   }
//
//   get x() {
//     return this._x
//   }
//
//   get y() {
//     return this._y
//   }
//
//   public random() {
//     this._x += this.getRandomInteger(-1, 1)
//     this._y += this.getRandomInteger(-1, 1)
//
//     this.character.move(this._x, this._y)
//
//     return this
//   }

// public synX(speed = 0.02, deviation = 30, limits = [0, 800]) {
//   this._y = Math.sin(this._angle) * deviation
//   this._x -= 1
//   this._angle += speed
//
//   this.move()
//
//   // if (this.angle > 2 * Math.PI) this.angle = 0
//   if (this._angle >= (5 / 2) * Math.PI) this._angle = (1 / 2) * Math.PI
//   if (this._x < limits[0]) this._x = limits[1]
//
//   return this
// }

// public round(vector: 1 | -1 = 1, r = 60, speed = 0.02) {
//   this._x = Math.sin(this._angle) * r
//   this._y = Math.cos(this._angle) * r * vector
//   this._angle += speed
//
//   this.move()
//
//   // if (this.angle > 2 * Math.PI) this.angle = 0
//   if (this._angle >= (5 / 2) * Math.PI) this._angle = (1 / 2) * Math.PI
//
//   return this
// }

// private move() {
//   this.character.move(this._x, this._y)
// }

// private getRandomInteger(min, max): number {
//   const rand = min - 0.5 + Math.random() * (max - min + 1)
//   return Math.round(rand)
// }

// private getRandom(min, max): number {
//   return min + Math.random() * (max - min)
// }
// }

// export default Controller

export {}
