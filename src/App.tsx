import React from 'react'
import './shared/css/Global.css'
import { Routes } from './routes/Routes'
import { DesktopNavigation } from './components/navigation/desktopnavigation/DesktopNavigation'
import { UserProvider } from './shared/provider/UserProvider'

function App() {
    return (
        <UserProvider>
            <Routes>
                <DesktopNavigation />
            </Routes>
        </UserProvider>
  )
}

export default App
