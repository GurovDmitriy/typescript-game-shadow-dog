import Controller from "./engine/Controller"
import Engine from "./engine/Engine"
import Game from "./game/Game"

const engine = new Engine(new Game(), new Controller())

engine.init()
engine.run()

export {}
