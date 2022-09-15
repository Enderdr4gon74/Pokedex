import { ApiPokemonController } from "./Controllers/ApiPokemonController.js";
import { SandboxPokemonController } from "./Controllers/SandboxPokemonController.js";

class App {
  sandboxPokemonController = new SandboxPokemonController()
  apiPokemonController = new ApiPokemonController()
}

window["app"] = new App();
