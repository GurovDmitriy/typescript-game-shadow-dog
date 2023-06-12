import Controller from "./engine/Controller"
import Engine from "./engine/Engine"
import Game from "./game/Game"

const engine = new Engine(Game, Controller)

engine.run()

export {}
