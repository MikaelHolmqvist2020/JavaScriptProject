import './SideBar.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../../routes/RoutingPath'


export const SideBar = (props: {drawerIsOpen: boolean, drawerHandler: Function }) => {
  const history = useHistory()
  const handleRedirect = (selectedView:any) => {
    history.push(selectedView)
    props.drawerHandler(false)
  }
  
  return (
    <div className={props.drawerIsOpen ? 'side-drawer open' : 'side-drawer'}>
      <button onClick={() => props.drawerHandler(false)}>Stäng Menyn</button>
      <div className='sidebarMenu'>
          <span className='sidbarLi' onClick={() => handleRedirect(RoutingPath.homeView)}>Home</span><br></br>
          <span className='sidbarLi' onClick={() => handleRedirect(RoutingPath.butikView)}>Butik</span><br></br>
          <span className='sidbarLi' onClick={() => handleRedirect(RoutingPath.nyheterView)}>Nyheter</span><br></br>
          <span className='sidbarLi' onClick={() => handleRedirect(RoutingPath.kontaktView)}>Kontakta oss</span><br></br>
          <span className='sidbarLi' onClick={() => handleRedirect(RoutingPath.omView)}>Om oss</span><br></br>
        <span className='sidbarLi' onClick={() => handleRedirect(RoutingPath.signInView)}>Logga in</span><br></br>
      </div>
    </div>
  )
}
