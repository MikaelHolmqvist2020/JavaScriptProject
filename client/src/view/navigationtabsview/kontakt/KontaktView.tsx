import PokemonAPIService from '../../../shared/api/service/PokemonAPIService'
import { useState, useEffect } from 'react'
import RoutingPath from '../../../routes/RoutingPath'
import { useHistory } from 'react-router-dom'

export const KontaktView = () => {
  const history = useHistory()
  const [pokemon, setPokemon] = useState<any>([])

  const fetchData = async () => {
    const { data } = await PokemonAPIService.getAllPokemon()
    setPokemon(data)
  }

  useEffect(() => {
    fetchData()
  })
  
  const displayData = () => {
    const array = pokemon?.results?.sort((a: any, b: any) => a.name.localeCompare(b.name))
    return <div>
      {array?.map((x: any) =>
        <div key={x.name}>
          <h1 onClick={() => history.push(RoutingPath.pokemonDetailView(x.name), x)}>{x.name}</h1>
        </div>
      )}
    </div>
  }

  return (
    <div>
      <button onClick={() => console.log(pokemon)}>Test API</button>
      {displayData()}
    </div>
  )
}
