import { FieldTimeOutlined, HeartFilled } from '@ant-design/icons'
import { FC, ReactNode } from 'react'
import Tag from '../Tag/Tag'
import css from './Item.module.scss'

export type ItemPropsType = {
  option: {
    title: string
    tag: Array<{ value: number | string; icon?: ReactNode }>
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
          option.tag.map(({ value, icon }) => <Tag option={{ value, icon }} />)}
      </div>
    </div>
  )
}

export default Item
