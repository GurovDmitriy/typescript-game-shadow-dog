import { Keyboard } from "./engine/Keyboard/Keyboard"
import { Engine } from "./engine/Engine"
import { Game } from "./game/Game"

const engine: Engine = Engine.create(Keyboard, Game)
engine.run()

export default {}
