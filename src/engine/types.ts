import { IContextGame } from "../game/types"
import { Game } from "../game/Game"
import { Keyboard } from "./Keyboard/Keyboard"

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

export type TypeConstructorGame = {
  new (context: IContextEngine): Game
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

export type TypeConstructorKeyboard = {
  new (): Keyboard
}

export enum TYPE_ACTION {
  keydown = "keydown",
  keyup = "keyup",
}

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
