import http from '../PokemonAPI'

const searchPokemon = (search: string) => {
  return http.get(`/pokemon/${search}`)
}

const getAllPokemon = () => {
  return http.get('/pokemon?limit=1118')
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  searchPokemon,
  getAllPokemon
}