import { FC } from 'react'
import Info from '../../components/Info/Info'
import css from './Period.module.scss'

const Period: FC = () => {
  return (
    <div className={css.list}>
      <Info
        props={{
          to: '/cycle',
          title: 'Подготовительный',
          description: 'Подготовительный этап подготовки',
          status: 'Завершено',
          progress: 100,
        }}
      />
      <Info
        props={{
          to: '/cycle',
          title: 'Базовый',
          description: 'Базовый этап подготовки',
          status: 'В работе',
          progress: 27,
        }}
      />
      <Info
        props={{
          to: '/cycle',
          title: 'Интенсивный',
          description: 'Интенсивный этап подготовки',
          status: 'Запланировано',
          progress: 0,
        }}
      />
    </div>
  )
}

export default Period
