import { FC } from 'react'
import Info from '../../components/Info/Info'
import css from './Day.module.scss'

const Day: FC = () => {
  return (
    <div className={css.list}>
      <Info
        props={{
          to: '/workout',
          title: 'Первый',
          description: 'Подготовительный этап подготовки',
          status: 'Завершено',
          progress: 100,
        }}
      />
      <Info
        props={{
          to: '/workout',
          title: 'Второй',
          description: 'Подготовительный этап подготовки',
          status: 'В работе',
          progress: 27,
        }}
      />
      <Info
        props={{
          to: '/workout',
          title: 'Третий',
          description: 'Подготовительный этап подготовки',
          status: 'Запланировано',
          progress: 0,
        }}
      />
      <Info
        props={{
          to: '/workout',
          title: 'Четвертый',
          description: 'Подготовительный этап подготовки',
          status: 'Запланировано',
          progress: 0,
        }}
      />
    </div>
  )
}

export default Day
