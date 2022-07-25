import { FC } from 'react'
import Info from './components/Info/Info'
import style from './Profile.module.scss'

const Profile: FC = () => {
  return (
    <div className={style.profile}>
      <Info props={{ name: 'Данил', login: 'zharinov-danil' }} />
    </div>
  )
}

export default Profile
