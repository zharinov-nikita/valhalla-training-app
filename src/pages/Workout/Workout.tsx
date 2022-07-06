import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import AffixButton from '../../components/AffixButton/AffixButton'
import Info from '../../components/Info/Info'
import {
  useFindByIdAndUpdateMutation,
  useFindByIdQuery,
} from '../../redux/workout/workout.service'
import css from './Workout.module.scss'

const Workout: FC = () => {
  const { search } = useLocation()
  const { isError, isLoading, data } = useFindByIdQuery(search)
  const [update, {}] = useFindByIdAndUpdateMutation()
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
              progress: item.status === 'Завершено' ? 100 : 0,
              onClick: () =>
                update({
                  ...item,
                  status:
                    item.status === 'Завершено' ? 'В работе' : 'Завершено',
                }),
            }}
          />
        ))}
      <AffixButton
        props={{
          title: 'Добавить тренировку',
        }}
      />
    </div>
  )
}

export default Workout
