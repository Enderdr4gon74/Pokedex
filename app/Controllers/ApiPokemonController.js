import { appState } from "../AppState.js";
import { apiPokemonService } from "../Services/ApiPokemonService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawApiPokemon() {
  let template = appState.apiPokemon[0].cardTemplate
  setHTML('currentPokemon', template)
}

export class ApiPokemonController {
  constructor() {
    appState.on('apiPokemon', _drawApiPokemon)
    this.getPokemon()
  }
  async getPokemon() {
     try {
      await apiPokemonService.getPokemon()
    } catch (error) {
      console.error('[Getting Pokemon]', error)
      Pop.error(error)
    }
  }
}
