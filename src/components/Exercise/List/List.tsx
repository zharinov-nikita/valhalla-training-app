import { FC } from 'react'
import Button from '../Button/Button'
import Item from '../Item/Item'
import css from './List.module.scss'
import { FieldTimeOutlined, HeartOutlined } from '@ant-design/icons'

const List: FC = () => {
  return (
    <div className={css.list}>
      <Item
        props={{
          _id: 0,
          queue: 0,
          title: 'Дистанция',
          description: 'Дистанция - бег в первой зоне интесивности!',
          tags: [
            { name: 'Время: 80', icon: <FieldTimeOutlined /> },
            { name: 'Инетенсивность: низкая', icon: <HeartOutlined /> },
          ],
        }}
      />
      <Item
        props={{
          _id: 1,
          queue: 1,
          title: 'Подтягивания',
          description:
            'Подтягивания - хват обычный, на каждом подходе меняем хват.',
          tags: [
            { name: 'Количество: 16' },
            { name: 'Подход: 1' },
            { name: 'Отдых: 60' },
          ],
        }}
      />
      <Item
        props={{
          _id: 2,
          queue: 2,
          title: 'Отжимания',
          description:
            'Подтягивания - хват обычный, на каждом подходе меняем хват.',
          tags: [
            { name: 'Количество: 16' },
            { name: 'Подход: 1' },
            { name: 'Отдых: 60' },
          ],
        }}
      />
      <Item
        props={{
          _id: 3,
          queue: 3,
          title: 'Пружина',
          description:
            'Подтягивания - хват обычный, на каждом подходе меняем хват.',
          tags: [
            { name: 'Количество: 16' },
            { name: 'Подход: 1' },
            { name: 'Отдых: 60' },
          ],
        }}
      />
      <Item
        props={{
          _id: 4,
          queue: 4,
          title: 'Выпрыгивания',
          description:
            'Подтягивания - хват обычный, на каждом подходе меняем хват.',
          tags: [
            { name: 'Количество: 16' },
            { name: 'Подход: 1' },
            { name: 'Отдых: 60' },
          ],
        }}
      />
      <Item
        props={{
          _id: 5,
          queue: 5,
          title: 'Пресс',
          description:
            'Подтягивания - хват обычный, на каждом подходе меняем хват.',
          tags: [
            { name: 'Количество: 16' },
            { name: 'Подход: 1' },
            { name: 'Отдых: 60' },
          ],
        }}
      />
      <Button />
    </div>
  )
}

export default List
