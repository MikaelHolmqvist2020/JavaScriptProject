import './DesktopNavigationTabs.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../../routes/RoutingPath'

export const DesktopNavigationTabs = () => {
  const history = useHistory()

  return (
    <ul className='ulTabsWrapper'>
      <li className='liTabs' onClick={() => history.push(RoutingPath.homeView)}>Home</li>
      <li className='liTabs' onClick={() => history.push(RoutingPath.butikView)}>StarwarsAPI</li>
      <li className='liTabs' onClick={() => history.push(RoutingPath.nyheterView)}>PokemonAPI</li>
      <li className='liTabs' onClick={() => history.push(RoutingPath.kontaktView)}>PokemonKaraktärer</li>
      <li className='liTabs' onClick={() => history.push(RoutingPath.omView)}>Om</li>
    </ul>
  )
}
