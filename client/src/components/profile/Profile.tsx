import { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import './Profile.css'
import { ProfileDropDown } from './profildropdown/ProfileDropDown'

export const Profile = () => {
  const [authUser,] = useContext(UserContext)
  return (
    <div className='profileWrapper'>
      <img className='profilesImg' src={'https://thispersondoesnotexist.com/image'}
        alt={''} /><br/>
      {authUser.username}
      <ProfileDropDown />
    </div>
  )
}
