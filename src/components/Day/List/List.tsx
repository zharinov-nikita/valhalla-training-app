import { FC } from 'react'
import Item from '../Item/Item'
import css from './List.module.scss'

const List: FC = () => {
  return (
    <div className={css.list}>
      <Item
        props={{
          _id: 1,
          queue: 1,
          title: 'Дистанция + Сила',
          description: 'Дистанция - бег в первой зоне интесивности.',
          tags: [{ name: 'День: 1' }, { name: 'Тренировки: 2' }],
        }}
      />
      <Item
        props={{
          _id: 2,
          queue: 2,
          title: 'Дистанция',
          description: 'Дистанция - бег в первой зоне интесивности.',
          tags: [{ name: 'День: 2' }, { name: 'Тренировки: 1' }],
        }}
      />
      <Item
        props={{
          _id: 3,
          queue: 3,
          title: 'Выходной',
          description: 'Выходной день.',
          tags: [{ name: 'День: 3' }, { name: 'Тренировки: 0' }],
        }}
      />
      <Item
        props={{
          _id: 4,
          queue: 4,
          title: 'Дистанция + Сила',
          description: 'Дистанция - бег в первой зоне интесивности.',
          tags: [{ name: 'День: 4' }, { name: 'Тренировки: 2' }],
        }}
      />
      <Item
        props={{
          _id: 5,
          queue: 5,
          title: 'Дистанция',
          description: 'Дистанция - бег в первой зоне интесивности.',
          tags: [{ name: 'День: 5' }, { name: 'Тренировки: 1' }],
        }}
      />
      <Item
        props={{
          _id: 6,
          queue: 6,
          title: 'Выходной',
          description: 'Выходной день.',
          tags: [{ name: 'День: 6' }, { name: 'Тренировки: 0' }],
        }}
      />
    </div>
  )
}

export default List
