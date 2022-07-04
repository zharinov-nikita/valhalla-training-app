import { FC } from 'react'
import Info, { InfoPropsType } from '../../components/Info/Info'
import css from './Cycle.module.scss'

const cycles: InfoPropsType[] = [
  {
    props: {
      to: '/day',
      title: 'Первый',
      description: 'Подготовительный этап подготовки',
      status: 'Завершено',
      progress: 100,
    },
  },
  {
    props: {
      to: '/day',
      title: 'Второй',
      description: 'Подготовительный этап подготовки',
      status: 'В работе',
      progress: 60,
    },
  },
  {
    props: {
      to: '/day',
      title: 'Третий',
      description: 'Подготовительный этап подготовки',
      status: 'Запланировано',
      progress: 0,
    },
  },
  {
    props: {
      to: '/day',
      title: 'Четвертый',
      description: 'Подготовительный этап подготовки',
      status: 'Запланировано',
      progress: 0,
    },
  },
]

const Cycle: FC = () => {
  return (
    <div className={css.list}>
      {cycles.map((cycle) => (
        <Info key={cycle.props.title} props={cycle.props} />
      ))}
    </div>
  )
}

export default Cycle
