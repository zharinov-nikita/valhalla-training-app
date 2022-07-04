import { FC } from 'react'
import Info, { InfoPropsType } from '../../components/Info/Info'
import css from './Day.module.scss'

const days: InfoPropsType[] = [
  {
    props: {
      to: '/workout',
      title: 'Первый',
      description: 'Подготовительный этап подготовки',
      status: 'Завершено',
      progress: 100,
    },
  },
  {
    props: {
      to: '/workout',
      title: 'Второй',
      description: 'Подготовительный этап подготовки',
      status: 'В работе',
      progress: 60,
    },
  },
  {
    props: {
      to: '/workout',
      title: 'Третий',
      description: 'Подготовительный этап подготовки',
      status: 'Запланировано',
      progress: 0,
    },
  },
  {
    props: {
      to: '/workout',
      title: 'Четвертый',
      description: 'Подготовительный этап подготовки',
      status: 'Запланировано',
      progress: 0,
    },
  },
  {
    props: {
      to: '/workout',
      title: 'Пятоый',
      description: 'Подготовительный этап подготовки',
      status: 'Запланировано',
      progress: 0,
    },
  },
  {
    props: {
      to: '/workout',
      title: 'Шестой',
      description: 'Подготовительный этап подготовки',
      status: 'Запланировано',
      progress: 0,
    },
  },
  {
    props: {
      to: '/workout',
      title: 'Седьмой',
      description: 'Подготовительный этап подготовки',
      status: 'Запланировано',
      progress: 0,
    },
  },
  {
    props: {
      to: '/workout',
      title: 'Восьмой',
      description: 'Подготовительный этап подготовки',
      status: 'Запланировано',
      progress: 0,
    },
  },
]

const Day: FC = () => {
  return (
    <div className={css.list}>
      {days.map((day) => (
        <Info key={day.props.title} props={day.props} />
      ))}
    </div>
  )
}

export default Day
