import { FC } from 'react'
import style from './Spin.module.scss'

const Spin: FC = () => {
  return (
    <div className={style.spin}>
      <div className={style.icon}>Загрузка...</div>
    </div>
  )
}

export default Spin
