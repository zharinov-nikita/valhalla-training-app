import { FC, MouseEventHandler } from 'react'
import css from './Status.module.scss'

export type StatusPropsType = {
  props: {
    text: string
    onClick?: MouseEventHandler
  }
}

const Status: FC<StatusPropsType> = ({ props }) => {
  return (
    <div
      className={css.status}
      onClick={props.onClick}
      data-status={props.text}
    >
      <div className={css.elipse}></div>
      <div className={css.text}>{props.text}</div>
    </div>
  )
}

export default Status
