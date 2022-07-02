import { FC } from 'react'
import css from './List.module.scss'
import Item from '../Item/Item'

const List: FC = () => {
  return (
    <div className={css.list}>
      <Item
        option={{ title: 'Первая зона', bound: { lower: 90, upper: 120 } }}
      />
      <Item
        option={{ title: 'Вторая зона', bound: { lower: 120, upper: 130 } }}
      />
      <Item
        option={{ title: 'Третья зона', bound: { lower: 130, upper: 140 } }}
      />
      <Item
        option={{ title: 'Четвертая зона', bound: { lower: 140, upper: 150 } }}
      />
      <Item
        option={{ title: 'Пятая зона', bound: { lower: 150, upper: 160 } }}
      />
    </div>
  )
}

export default List
