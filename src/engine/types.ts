import { IContextGame } from "../game/types"

export interface Updatable {
  update(): void
}

export interface Runnable {
  run(): void
}

export interface IEngine extends Runnable {}

export interface IGame extends Runnable {
  context: IContextGame
  init(): void
}

export interface IContextEngine {
  ctx: CanvasRenderingContext2D
  canvas: HTMLCanvasElement
  keyboard: IKeyboard
}

export interface IKeyboard {
  define(
    btn: BTN,
    action: () => void,
    after?: () => void,
    press?: boolean,
  ): void

  destroy(): void
}

/**
 * Types events button
 */
export enum TYPE_ACTION {
  keydown = "keydown",
  keyup = "keyup",
}

/**
 * Describe buttons
 */
export enum BTN {
  w = "KeyW",
  a = "KeyA",
  s = "KeyS",
  d = "KeyD",
  q = "KeyQ",
  e = "KeyE",
  space = "Space",
  arrowUp = "arrowUp",
  arrowDown = "arrowDown",
  arrowLeft = "arrowLeft",
  arrowRight = "arrowRight",
}
