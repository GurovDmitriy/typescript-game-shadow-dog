export interface IEngine {
  run(): void
}

export interface IGame {
  run(): void
}

export interface IContextEngine {
  ctx: CanvasRenderingContext2D
  canvas: HTMLCanvasElement
  keyboard: IKeyboard
}

/**
 * Types events button
 */
export enum TYPE_ACTION {
  keypress = "keypress",
  keydown = "keydown",
  keyup = "keyup",
}

/**
 * Describe buttons
 */
export enum BTN {
  d = "d",
  a = "a",
  w = "w",
  s = "s",
  arrowRight = "ArrowRight",
  arrowLeft = "ArrowLeft",
  arrowUp = "ArrowUp",
  arrowDown = "ArrowDown",
}

export interface IKeyboard {
  define(
    type: TYPE_ACTION,
    btn: BTN,
    action: () => void,
    after?: () => void,
  ): void
}
