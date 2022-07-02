import { FallOutlined } from '@ant-design/icons'
import { FC } from 'react'
import css from './Limit.module.scss'

export type LimitPropsType = {
  value: number
}

const Limit: FC<LimitPropsType> = ({ value }) => {
  return (
    <div className={css.limit}>
      <div className={css.top}>
        <span className={css.text}>Граница</span>
      </div>
      <div className={css.buttom}>
        <span className={css.counter}>{value}</span>
      </div>
    </div>
  )
}

export default Limit
