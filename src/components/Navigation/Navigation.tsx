import { AimOutlined } from '@ant-design/icons'
import { FC } from 'react'
import style from './Navigation.module.scss'

const Navigation: FC = () => {
  return (
    <div className={style.navigation}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.list}>
            <div className={style.item}>
              <div className={style.icon}>
                <AimOutlined />
              </div>
              <div className={style.text}>
                <div className={style.title}>Профиль</div>
                <div className={style.description}>
                  Главная страница вашего профиля
                </div>
              </div>
            </div>
            <div className={style.item}>
              <div className={style.icon}>
                <AimOutlined />
              </div>
              <div className={style.text}>
                <div className={style.title}>Профиль</div>
                <div className={style.description}>
                  Главная страница вашего профиля
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
