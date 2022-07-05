import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import Info from '../../components/Info/Info'
import { useWorkoutQuery } from '../../redux/service'
import css from './Workout.module.scss'

const Workout: FC = () => {
  const { search } = useLocation()
  const { isError, isLoading, data } = useWorkoutQuery(search)
  return (
    <div className={css.list}>
      {isLoading && 'Загрузка...'}
      {isError && 'Ошибка'}
      {data &&
        data.map((item) => (
          <Info
            key={item._id}
            props={{
              to: `/exercise/?workoutId=${item._id}`,
              title: item.title,
              description: item.description,
              status: item.status,
              progress: 30,
            }}
          />
        ))}
    </div>
  )
}

export default Workout
