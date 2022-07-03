import { FieldTimeOutlined, HeartFilled } from '@ant-design/icons'
import { FC, ReactNode } from 'react'
import Tag from '../Tag/Tag'
import css from './Item.module.scss'

export type ItemPropsType = {
  option: {
    id?: number
    title: string
    tag: Array<{
      id?: number
      color?: 'yellow' | 'red' | 'blue'
      value: number | string
      icon?: ReactNode
    }>
  }
}

const Item: FC<ItemPropsType> = ({ option }) => {
  return (
    <div className={css.item}>
      <div className={css.header}>
        <div className={css.title}>{option.title}</div>
      </div>
      <div className={css.body}>
        {option.tag &&
          option.tag.map(({ id, color, value, icon }) => (
            <Tag key={id} option={{ color, value, icon }} />
          ))}
      </div>
    </div>
  )
}

export default Item
