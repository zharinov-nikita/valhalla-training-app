import { FC } from 'react'
import css from './Status.module.scss'

export type StatusType = 'Запланировано' | 'В работе' | 'Завершено'

export type StatusPropsType = {
  props: {
    text: StatusType
  }
}

const Status: FC<StatusPropsType> = ({ props }) => {
  return (
    <div className={css.status}>
      <div className={css.elipse}></div>
      <div className={css.text}>{props.text}</div>
    </div>
  )
}

export default Status
