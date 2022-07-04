import { FC } from 'react'
import Info, { InfoPropsType } from '../../components/Info/Info'
import css from './Period.module.scss'

const periodes: InfoPropsType[] = [
  {
    props: {
      to: '/cycle',
      title: 'Подготовительный',
      description: 'Подготвка к базовому этапу',
      status: 'Завершено',
      progress: 100,
    },
  },
  {
    props: {
      to: '/cycle',
      title: 'Базовый',
      description: 'Аэробная подготовка, улучшение общей силы',
      status: 'В работе',
      progress: 27,
    },
  },
  {
    props: {
      to: '/cycle',
      title: 'Базовый',
      description: 'Аэробная подготовка, улучшение специальной силы',
      status: 'Запланировано',
      progress: 0,
    },
  },
  {
    props: {
      to: '/cycle',
      title: 'Интенсивный',
      description:
        'Аэробная база, интервалы, горные интервалы, специальная сила',
      status: 'Запланировано',
      progress: 0,
    },
  },
  {
    props: {
      to: '/cycle',
      title: 'Интенсивный',
      description:
        'Интервалы, горные интервалы, скорость, техника, специальная сила',
      status: 'Запланировано',
      progress: 0,
    },
  },
  {
    props: {
      to: '/cycle',
      title: 'Пиковый',
      description:
        'Интервалы, анаэробная скорость, темповая работа/соревнования',
      status: 'Запланировано',
      progress: 0,
    },
  },
]

const Period: FC = () => {
  return (
    <div className={css.list}>
      {periodes.map((period) => (
        <Info
          key={period.props.description + period.props.title}
          props={period.props}
        />
      ))}
    </div>
  )
}

export default Period
