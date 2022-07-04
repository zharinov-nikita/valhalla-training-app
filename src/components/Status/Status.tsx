import { FC } from 'react'
import css from './Status.module.scss'

const Status: FC = () => {
  return (
    <div className={css.status}>
      <div className={css.elipse}></div>
      <div className={css.text}>Запланировано</div>
    </div>
  )
}

export default Status
