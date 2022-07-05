import { FC } from 'react'
import Info from '../../components/Info/Info'
import { useFindQuery } from '../../redux/service'
import css from './Workout.module.scss'

const Workout: FC = () => {
  const { isError, isLoading, data } = useFindQuery('workout')
  return (
    <div className={css.list}>
      {isLoading && 'Загрузка...'}
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
