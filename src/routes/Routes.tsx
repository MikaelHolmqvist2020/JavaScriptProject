import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { ButikView } from '../view/navigationtabsview/butik/ButikView'
import { KontaktView } from '../view/navigationtabsview/kontakt/KontaktView'
import { NyheterView } from '../view/navigationtabsview/nyheter/NyheterView'
import { OmView } from '../view/navigationtabsview/om/OmView'
import RoutingPath from './RoutingPath'
import { SignInView } from '../view/SignInView'
import { SettingsView } from '../view/authenticatedview/SettingsView'
import { UserContext } from '../shared/provider/UserProvider'
import React, { useEffect, useContext } from 'react'

export const Routes = (props: { children: React.ReactChild }) => {
  const [authUser, setAuthUser] = useContext(UserContext)
  const { children } = props

  const blockRouteIfAuthenticated = (allowedView : React.FC, notAllowedView: React.FC) => {
    return !authUser ? allowedView : notAllowedView
  }

  const authenticationRequired = (allowed: React.FC, notallowed: React.FC) => {
    return authUser ? allowed : notallowed
  }

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setAuthUser({ username: localStorage.getItem('user') })
    }
  }, [])
  
  return (
    <BrowserRouter>
      {children}
        <Switch>
            <Route exact path={RoutingPath.homeView} component={HomeView} />
            <Route exact path={RoutingPath.butikView} component={ButikView} />
            <Route exact path={RoutingPath.kontaktView} component={KontaktView} />
            <Route exact path={RoutingPath.nyheterView} component={NyheterView} />
            <Route exact path={RoutingPath.omView} component={OmView} />
            <Route exact path={RoutingPath.signInView} component={blockRouteIfAuthenticated(SignInView, HomeView)} />
            <Route exact path={RoutingPath.settingsView} component={authenticationRequired(SettingsView, SignInView)} />
            <Route component={HomeView} />
        </Switch>
    </BrowserRouter>
  )
}