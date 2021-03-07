const homeView = '/'
const butikView = '/butik'
const kontaktView = '/kontakt'
const nyheterView = '/nyheter'
const omView = '/om'
const signInView = '/signin'
const createNewUserView = '/createuser'

/* Authenticated routes below */
const settingsView = '/user/settings'
const profileView = '/user/profile'

/* Functions below */
const pokemonDetailView = (name?: string) => { return name ? `/pokemon/${name}` : '/pokemon/:name' }



// eslint-disable-next-line import/no-anonymous-default-export
export default {
  homeView,
  butikView,
  kontaktView,
  nyheterView,
  omView,
  signInView,
  createNewUserView,
  settingsView,
  profileView,
  pokemonDetailView,
}