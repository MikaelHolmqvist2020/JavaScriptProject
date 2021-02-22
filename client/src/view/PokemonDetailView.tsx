import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import './PokemonDetailView.css'


export const PokemonDetailView = () => {
  const [data, setData] = useState<any>([])
  const location = useLocation<any>()

  const fetchData = async () => {
    const { data } = await Axios.get(location.state.url)
    setData(data)
  }

  useEffect(() => {
    fetchData()
  })

  const displayData = () => {
    return <div>
      <img className='imgstyle' src={data?.sprites?.front_default} alt={''} />
      <img className='imgstyle' src={data?.sprites?.back_default} alt={''} />
      <h1>Namn: {data.name}</h1>
      <h1>Längd: {data.height} cm</h1>
      <h1>Vikt: {data.weight} kg</h1>
    </div>
  }

  return (
    <div>
      <button onClick={() => console.log(data)}>Visa Karaktär</button>
      {displayData()}
    </div>
  )
}
