import React, { FC } from 'react'
import css from './Approach.module.scss'

export type ApproachPropsType = {
  props: Array<{
    id: number
    completed: boolean
    title: string
    value: string
  }>
}

const Approach: FC<ApproachPropsType> = ({ props }) => {
  return (
    <div className={css.list}>
      {props.map((item) => (
        <React.Fragment key={item.id}>
          <div className={css.item} data-completed={item.completed}>
            <div className={css.header}>{item.title} раз</div>
            <div className={css.footer}>{item.value} сек</div>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}

export default Approach
