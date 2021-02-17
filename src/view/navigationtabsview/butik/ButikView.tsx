import { useState, useEffect } from 'react'
import StarwarsAPIService from '../../../shared/api/service/StarwarsAPIService'

export const ButikView = () => {
  const [starwarsData, setStarWarsData] = useState<any>()
  const [count, setCount] = useState(1)

  const makeSureCountWillNeverGoBelowValue1 = () => {
    (count <= 1) ? setCount(1) : setCount(count - 1)
  }
  
  const getDataFromStarWarsAPI = async () => {
    try {
    const response = await StarwarsAPIService.getStarwarsCharacter(count)
    setStarWarsData(response)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    getDataFromStarWarsAPI()
  }, [count])

  return (
    <div>
      <h1>Detta är StarwarsAPI:et</h1>
      <h1>Name:{starwarsData?.data?.name}</h1>
      <h1>Hair color:{starwarsData?.data?.hair_color}</h1>
      <h1>Gender:{starwarsData?.data?.birth_year}</h1>
      <h1>Height:{starwarsData?.data?.height}</h1>
      
      <button onClick={() => makeSureCountWillNeverGoBelowValue1()}>Get previus character</button>
      <button onClick={() => setCount(count + 1)}>Get next character</button>
    </div>
  )
}
