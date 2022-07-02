import { FC } from 'react'
import css from './Item.module.scss'
import Limit from '../Limit/Limit'

export type ItemPropsType = {
  option: {
    title: string
    bound: {
      lower: number
      upper: number
    }
  }
}

const Item: FC<ItemPropsType> = ({ option }) => {
  const { title } = option
  const { lower, upper } = option.bound

  return (
    <div className={css.item}>
      <Limit value={lower} />
      <div className={css.title}>{title}</div>
      <Limit value={upper} />
    </div>
  )
}

export default Item
