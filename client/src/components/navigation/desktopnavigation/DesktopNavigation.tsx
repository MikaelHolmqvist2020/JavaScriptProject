import React from 'react'
import './DesktopNavigation.css'
import Logotype from '../../../shared/images/logotype.svg'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import RoutingPath from '../../../routes/RoutingPath'
import { UserContext } from '../../../shared/provider/UserProvider'
import { Profile } from '../../profile/Profile'
import { DesktopNavigationTabs } from './desktopnavigationtabs/DesktopNavigationTabs'

export const DesktopNavigation = () => {
  const history = useHistory()
  const [authUser, setAuthUser] = useContext(UserContext)

  const displaySignInButtonOrUsernameDependingOnAuthentiation = () => {
    return authUser?.username
      ? <div className='profile'><Profile /></div>
      : <span className='signInButton' onClick={() => history.push(RoutingPath.signInView)}>Login</span>
  }

  return (
    <div className='desktopNavigationWrapper'>
      <img className='navigationLogotype'
        onClick={() => history.push(RoutingPath.homeView)}
        src={Logotype}
        alt={''} />
      <div className='desktopNavigationTabs'>
        <DesktopNavigationTabs />
      </div>
      {displaySignInButtonOrUsernameDependingOnAuthentiation()}
    </div>
  )
}
