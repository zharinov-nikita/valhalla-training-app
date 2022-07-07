import React, { FC } from 'react'
import { useLocation } from 'react-router-dom'
import AffixButton from '../../components/AffixButton/AffixButton'
import Info from '../../components/Info/Info'
import Property from '../../components/Property/Property'
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
          <React.Fragment key={item._id}>
            <Info
              key={item._id}
              props={{
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
            {item.option?.map((option) => (
              <Property props={option} />
            ))}
          </React.Fragment>
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
