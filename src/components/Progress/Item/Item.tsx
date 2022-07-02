import { FieldTimeOutlined, TrophyOutlined } from '@ant-design/icons'
import { FC } from 'react'
import css from './Item.module.scss'

export type ItemPropsType = {
  option: {
    name: string
    value: number
  }
}

const Item: FC<ItemPropsType> = ({ option }) => {
  return (
    <div className={css.item}>
      <div className={css.name}>{option.name}</div>

      <div className={css.list}>
        <div className={css.value}>
          {option.value}
          <TrophyOutlined />
        </div>
        <div className={css.value}>
          {option.value}
          <FieldTimeOutlined />
        </div>
      </div>
    </div>
  )
}

export default Item
