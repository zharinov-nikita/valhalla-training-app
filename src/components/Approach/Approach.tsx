import React, { FC } from 'react'
import css from './Approach.module.scss'

export type ApproachPropsType = {
  props: Array<{
    id: string
    comleted: boolean
    quantity: number
    rest: number
  }>
}

const Approach: FC<ApproachPropsType> = ({ props }) => {
  return (
    <div className={css.list}>
      {props &&
        props.map((item) => (
          <React.Fragment key={item.id}>
            <div className={css.item} data-completed={item.comleted}>
              <div className={css.header}>{item.quantity} раз</div>
              <div className={css.footer}>{item.rest} сек</div>
            </div>
          </React.Fragment>
        ))}
    </div>
  )
}

export default Approach
