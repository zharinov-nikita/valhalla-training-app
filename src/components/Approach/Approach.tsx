import React, { FC, MouseEventHandler } from 'react'
import css from './Approach.module.scss'

export type ApproachPropsType = {
  props: {
    id: number
    completed: boolean
    title: string
    value: string
  }
  onClick?: MouseEventHandler
}

const Approach: FC<ApproachPropsType> = ({ props, onClick }) => {
  return (
    <div
      className={css.item}
      data-completed={props.completed}
      onClick={onClick}
    >
      <div className={css.header}>{props.title} раз</div>
      <div className={css.footer}>{props.value} сек</div>
    </div>
  )
}

export default Approach
