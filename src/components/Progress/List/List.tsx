import { FC } from 'react'
import css from './List.module.scss'
import Item from '../Item/Item'

const List: FC = () => {
  return (
    <div className={css.list}>
      <Item option={{ name: 'Подтягивания', value: 15, time: 60 }} />
      <Item option={{ name: 'Отжимания', value: 58, time: 120 }} />
      <Item option={{ name: 'Пружина', value: 60, time: 103 }} />
      <Item option={{ name: 'Выпрыгивания', value: 60, time: 103 }} />
      <Item option={{ name: 'Пресс', value: 60, time: 80 }} />
    </div>
  )
}

export default List
