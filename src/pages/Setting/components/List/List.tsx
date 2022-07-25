import { FC } from 'react'
import Groop from '../Groop/Groop'
import Item from '../Item/Item'
import style from './List.module.scss'

export type ListPropsType = {}

const List: FC<ListPropsType> = () => {
  return (
    <div className={style.list}>
      <Groop className={style.groop}>
        <Item
          props={{
            title: 'Тема',
            description: 'Настройка темы',
            checked: false,
          }}
          className={style.item}
        />
        <Item
          props={{
            title: 'Тема',
            description: 'Настройка темы',
            checked: false,
          }}
          className={style.item}
        />
      </Groop>

      <Groop className={style.groop}>
        <Item
          props={{
            title: 'Тема',
            description: 'Настройка темы',
            checked: false,
          }}
          className={style.item}
        />
        <Item
          props={{
            title: 'Тема',
            description: 'Настройка темы',
            checked: false,
          }}
          className={style.item}
        />
      </Groop>
    </div>
  )
}

export default List
