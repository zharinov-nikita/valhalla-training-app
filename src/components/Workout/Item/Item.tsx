import { FieldTimeOutlined, HeartFilled } from '@ant-design/icons'
import { FC, ReactNode, useEffect, useState } from 'react'
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
    completed: boolean
  }
}

const Item: FC<ItemPropsType> = ({ option }) => {
  const [completed, setCompleted] = useState<boolean>(false)
  const onClick = () => setCompleted(!completed)
  return (
    <div className={css.item} data-completed={completed}>
      <div className={css.left}>
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
      <div className={css.right} onClick={onClick}>
        <span>Выполнил</span>
      </div>
    </div>
  )
}

export default Item
