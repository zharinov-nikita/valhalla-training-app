import { FieldTimeOutlined, HeartFilled } from '@ant-design/icons'
import { FC, ReactNode, useState } from 'react'
import Tag from '../Tag/Tag'
import css from './Item.module.scss'

export type ItemPropsType = {
  option: {
    id: number
    title: string
    tag: Array<{
      id: number
      color: 'yellow' | 'red' | 'blue'
      value: number | string
      icon: ReactNode
    }>
    completed: boolean
  }
}

const Item: FC<ItemPropsType> = ({ option }) => {
  const [completedItem, setCompletedItem] = useState<boolean>(false)
  const onClickItem = () => setCompletedItem(!completedItem)

  const [completedGroop, setCompletedGroop] = useState<boolean>(false)
  const onClickGroop = () => setCompletedGroop(!completedGroop)

  return (
    <div className={css.item} data-completed={completedItem}>
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
      <div className={css.right} onClick={onClickItem}>
        <span>Выполнил</span>
      </div>
    </div>
  )
}

export default Item
