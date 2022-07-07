import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import AffixButton from '../../components/AffixButton/AffixButton'
import Info from '../../components/Info/Info'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { drawerSlice } from '../../redux/drawer/drawer.slice'
import {
  useFindByIdAndUpdateMutation,
  useFindByIdQuery,
} from '../../redux/exercise/exercise.service'
import css from './Exercise.module.scss'
import ExerciseDrawer from './ExerciseDrawer/ExerciseDrawer'

const Exercise: FC = () => {
  const { search } = useLocation()
  const { isError, isLoading, data } = useFindByIdQuery(search)
  const [update, {}] = useFindByIdAndUpdateMutation()
  const dispatch = useAppDispatch()
  const { show } = drawerSlice.actions
  return (
    <div className={css.list}>
      {isLoading && 'Загрузка...'}
      {isError && 'Ошибка'}
      {data &&
        data.map((item) => (
          <Info
            key={item._id}
            props={{
              to: `/exercise/?exerciseId=${item._id}`,
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
          title: 'Добавить упражнение',
          onClick: () => dispatch(show()),
        }}
      />
      <ExerciseDrawer />
    </div>
  )
}

export default Exercise
