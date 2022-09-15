import { appState } from "../AppState.js";
import { ApiPokemon } from "../Models/ApiPokemon.js";
import { Pop } from "../Utils/Pop.js";
import { PokemonServer } from "./AxiosService.js";
import { PokemonBaseServer } from "./AxiosService.js";

class ApiPokemonService {
  async getPokemon() {
    const ranNum = Math.round(Math.random()*1153)
    const res1 = await PokemonServer.get(`/api/v2/pokemon?offset=${ranNum}&limit=1`)
    console.log(res1.data.results[0].url)
    const res2 = await PokemonBaseServer.get(res1.data.results[0].url)
    console.log(res2.data)
    const data = {
      name: res2.data.name,
      nickname: '',
      img: res2.data.sprites.front_default,
      weight: res2.data.weight,
      height: res2.data.height,
      types: res2.data.types,
      user: appState.user
    };
    console.log(data)
    appState.apiPokemon = [new ApiPokemon(data)]
  }
}

export const apiPokemonService = new ApiPokemonService() 