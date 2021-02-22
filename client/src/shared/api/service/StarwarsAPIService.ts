import http from '../StarwarsAPI'

const getDataLukeSkywalker = () => {
  return http.get('/people/1')
}

const getStarwarsCharacter = (characterNumber: number) => {
  return http.get(`/people/${characterNumber}`)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getDataLukeSkywalker,
  getStarwarsCharacter
}