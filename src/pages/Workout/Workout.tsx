import { FC } from 'react'
import Info from '../../components/Info/Info'
import css from './Workout.module.scss'

const Workout: FC = () => {
  return (
    <div className={css.list}>
      <Info
        props={{
          to: '/exercise',
          title: 'Дистанция',
          description: 'Подготовительный этап подготовки',
          status: 'Завершено',
          progress: 100,
        }}
      />
    </div>
  )
}

export default Workout
