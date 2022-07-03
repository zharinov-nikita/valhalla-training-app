import { FieldTimeOutlined, HeartFilled } from '@ant-design/icons'
import { FC, ReactNode, useEffect, useState } from 'react'
import Tag from '../Tag/Tag'
import css from './Item.module.scss'

export type ItemPropsType = {
  option: {
    item: {
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
    groop?: Array<{
      id: number
      title: string
      tag: Array<{
        id: number
        color: 'yellow' | 'red' | 'blue'
        value: number | string
        icon: ReactNode
      }>
      completed: boolean
    }>
  }
}

const Item: FC<ItemPropsType> = ({ option }) => {
  const [completedItem, setCompletedItem] = useState<boolean>(false)
  const onClickItem = () => setCompletedItem(!completedItem)

  const [completedGroop, setCompletedGroop] = useState<boolean>(false)
  const onClickGroop = () => setCompletedGroop(!completedGroop)

  return (
    <>
      {option.item && (
        <div className={css.item} data-completed={completedItem}>
          <div className={css.left}>
            <div className={css.header}>
              <div className={css.title}>{option.item.title}</div>
            </div>
            <div className={css.body}>
              {option.item.tag &&
                option.item.tag.map(({ id, color, value, icon }) => (
                  <Tag key={id} option={{ color, value, icon }} />
                ))}
            </div>
          </div>
          <div className={css.right} onClick={onClickItem}>
            <span>Выполнил</span>
          </div>
        </div>
      )}
      {option.groop && (
        <div className={css.groop}>
          {option.groop.map((groop) => (
            <div className={css.item} data-completed={completedGroop}>
              <div className={css.left}>
                <div className={css.header}>
                  <div className={css.title}>{groop.title}</div>
                </div>
                <div className={css.body}>
                  {groop.tag &&
                    groop.tag.map(({ id, color, value, icon }) => (
                      <Tag key={id} option={{ color, value, icon }} />
                    ))}
                </div>
              </div>
              <div className={css.right} onClick={onClickGroop}>
                <span>Выполнил</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Item
