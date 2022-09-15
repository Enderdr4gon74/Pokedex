import { appState } from "../AppState.js";
import { SandboxPokemon } from "../Models/SandboxPokemon.js";
import { SandboxServer } from "./AxiosService.js";

class SandboxPokemonService {
  async addPokemon() {
    // @ts-ignore 
    const alreadyCaught = appState.sandboxPokemon.find(p => p.name == appState.apiPokemon[0].name)
    if (alreadyCaught) {
      throw new Error("You've already caught this pokemon!")
    }
    if (appState.sandboxPokemon.length > 1154) {
      throw new Error('Unfortunately you do not have enough space in your PokeDex for more pokemon')
    }
    appState.apiPokemon[0].nickname = prompt("What nickname do you want to give " + appState.apiPokemon[0].name + "?")
    const res = await SandboxServer.post(`/api/${appState.user}/pokemon`, appState.apiPokemon[0])
    console.log(res.data)
    const newPokemon = new SandboxPokemon(res.data)
    console.log(newPokemon)
    appState.sandboxPokemon = [...appState.sandboxPokemon, newPokemon]
  }
  async deletePokemon(id) {
    await SandboxServer.delete(`/api/${appState.user}/pokemon/${id}`)
    appState.sandboxPokemon = appState.sandboxPokemon.filter(p => p.id != id)
  }
  async getPokemon() {
    const res = await SandboxServer.get(`/api/${appState.user}/pokemon`)
    appState.sandboxPokemon = res.data.map(p => new SandboxPokemon(p))
    console.log(appState.sandboxPokemon)
  }
}

export const sandboxPokemonService = new SandboxPokemonService()