import {
  HomeFilled,
  ProfileOutlined,
  ProjectOutlined,
  UserDeleteOutlined,
} from '@ant-design/icons'
import { FC } from 'react'
import css from './Menu.module.scss'

const Menu: FC = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div className={css.item}>
          <span>Аккаунт</span>
          <UserDeleteOutlined />
        </div>
        <div className={css.item}>
          <span>План</span>
          <ProjectOutlined />
        </div>
        <div className={css.item}>
          <span>Бэклог</span>
          <ProfileOutlined />
        </div>
      </div>
    </div>
  )
}

export default Menu
