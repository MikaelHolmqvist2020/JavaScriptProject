import './SideBar.css'
import React from 'react'

export const SideBar = (props: {drawerIsOpen: boolean, drawerHandler: Function }) => {
  return (
    <div className={props.drawerIsOpen ? 'side-drawer open' : 'side-drawer'}>
      <button onClick={() => props.drawerHandler(false)}>Stäng Menyn</button>
      <ul>
        <li>1</li>
        <li>2</li>
        </ul>
    </div>
  )
}
