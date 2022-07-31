import { ApiOutlined } from '@ant-design/icons'
import { FC } from 'react'
import Card from '../Card/Card'
import List from '../Card/List/List'
import Task from '../Card/Task/Task'
import Icon from '../Icon/Icon'
import style from './Workout.module.scss'

export type WorkoutPropsType = {
  props: Array<{
    id: number | string
  }>
}

const Workout: FC = () => {
  return (
    <Card
      props={{
        icon: (
          <Icon
            props={{
              children: <ApiOutlined />,
              color: { type: 'transparent', value: 'yellow' },
              size: 'small',
            }}
          />
        ),
        title: 'Подтягивания',
        description: 'Выполнение тренировки',
        visible: true,
      }}
    >
      <Task
        props={[
          {
            id: 0,
            completed: true,
            option: [
              { id: 1, key: 'Количество (раз)', value: 12 },
              { id: 2, key: 'Отдых (сек)', value: 120 },
              { id: 3, key: 'Хват', value: 'Прямой' },
              { id: 4, key: 'Расположение рук', value: 'Узкое' },
            ],
          },
          {
            id: 1,
            completed: true,
            option: [
              { id: 1, key: 'Количество (раз)', value: 12 },
              { id: 2, key: 'Отдых (сек)', value: 120 },
            ],
          },
          {
            id: 2,
            completed: true,
            option: [
              { id: 1, key: 'Количество (раз)', value: 12 },
              { id: 2, key: 'Отдых (сек)', value: 120 },
            ],
          },
          {
            id: 3,
            completed: true,
            option: [
              { id: 1, key: 'Количество (раз)', value: 12 },
              { id: 2, key: 'Отдых (сек)', value: 120 },
              { id: 3, key: 'Хват', value: 'Обратный' },
            ],
          },
        ]}
      />
    </Card>
  )
}

export default Workout
