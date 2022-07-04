import { FC } from 'react'
import Info from '../../components/Info/Info'
import css from './Cycle.module.scss'

const Cycle: FC = () => {
  return (
    <div className={css.list}>
      <Info
        props={{
          to: '/day',
          title: 'Первый подготовительный',
          description: 'Подготовительный этап подготовки',
          status: 'Завершено',
          progress: 100,
        }}
      />
      <Info
        props={{
          to: '/day',
          title: 'Первый подготовительный',
          description: 'Подготовительный этап подготовки',
          status: 'В работе',
          progress: 27,
        }}
      />
      <Info
        props={{
          to: '/day',
          title: 'Первый подготовительный',
          description: 'Подготовительный этап подготовки',
          status: 'Запланировано',
          progress: 0,
        }}
      />
      <Info
        props={{
          to: '/day',
          title: 'Первый подготовительный',
          description: 'Подготовительный этап подготовки',
          status: 'Запланировано',
          progress: 0,
        }}
      />
    </div>
  )
}

export default Cycle
