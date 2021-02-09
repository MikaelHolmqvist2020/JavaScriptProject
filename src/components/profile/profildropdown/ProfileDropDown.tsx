import React from 'react'
import './ProfileDropDown.css'
import { useContext } from 'react'
import { UserContext } from '../../../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'


export const ProfileDropDown = () => {
  const history = useHistory()
  const [authUser, setAuthUser] = useContext(UserContext)
  

  const logout = () => {
    setAuthUser(false)
    localStorage.removeItem('user')
    history.push(RoutingPath.homeView)
  }

  return (
    <div className='profileDropDown'>
        <span className='alt' onClick={() => history.push(RoutingPath.settingsView)}>Settings</span>
        <span className='alt'>alternativ 2</span>
        <span className='alt'>alternativ 3</span>
        <span className='alt' onClick={() => logout()}>Logga ut</span>
    </div>
  )
}
