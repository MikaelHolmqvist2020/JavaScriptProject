import React from 'react'
import './DesktopNavigation.css'
import Logotype from '../../../shared/images/logotype.svg'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'

export const DesktopNavigation = () => {
  const history = useHistory()

  return (
    <div className='desktopNavigationWrapper'>
      <img className='navigationLogotype'
        src={Logotype}
        alt={''} />
      <span onClick={() => history.push(RoutingPath.homeView)}>Home</span>
      <span onClick={() => history.push(RoutingPath.homeView)}>Brands</span>
      <span onClick={() => history.push(RoutingPath.homeView)}>News</span>
      <span onClick={() => history.push(RoutingPath.aboutView)}>About</span>
      <span onClick={() => history.push(RoutingPath.signInView)}>Signin</span>
    </div>
  )
}
