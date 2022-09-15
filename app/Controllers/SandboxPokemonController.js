import { appState } from "../AppState.js";
import { SandboxServer } from "../Services/AxiosService.js";
import { sandboxPokemonService } from "../Services/SandboxPokemonService.js";
import { apiPokemonService } from "../Services/ApiPokemonService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function drawSandboxPokemon() {
  let template = ''
  appState.sandboxPokemon.forEach(p => template += p.PokedexTemplate)
  setHTML('pokedex', template)
}

 export class SandboxPokemonController {
  constructor() {
    appState.on('sandboxPokemon', drawSandboxPokemon)
    this.getPokemon()
  }

  async getPokemon() {
    try {
      await sandboxPokemonService.getPokemon()
    } catch (error) {
      console.error('[Getting Pokemon]', error)
      Pop.error(error)
    }
  }

  async addPokemon() {
    try {
      await sandboxPokemonService.addPokemon()
      await apiPokemonService.getPokemon()
      Pop.success('Pokemon Caught')
    } catch (error) {
      console.error('[Adding Pokemon]', error)
      Pop.error(error)
    }
  }

  async deletePokemon(id) {
    try {
      const yes = await Pop.confirm('Release this Pokemon?')
      if (!yes) { return }
      await sandboxPokemonService.deletePokemon(id)
    } catch (error) {
      console.error('[Deleting Pokemon]', error)
      Pop.error(error)
    }    
  }
 }
