import React, { FC } from 'react'
import { useLocation } from 'react-router-dom'
import Approach from '../../../../components/Approach/Approach'
import ApproachList from '../../../../components/Approach/ApproachList'
import Info from '../../../../components/Info/Info'
import Property from '../../../../components/Property/Property'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { drawerSlice } from '../../../../redux/drawer/drawer.slice'
import { appSlice } from '../../../../redux/app/app.slice'
import {
  useFindByIdAndUpdateMutation,
  useFindByIdAndDeleteMutation,
  useFindByFieldQuery,
  ExerciseType,
} from '../../../../redux/exercise/exercise.service'
import { updateFormUpdate } from '../../../../redux/exercise/exercise.slice'
import css from './List.module.scss'
import Loader from '../../../../components/Loader/Loader'
import Empty from '../../../../components/Empty/Empty'
import { useStatus } from '../../../../hooks/useStatus'

const List: FC = () => {
  const { search } = useLocation()
  const workoutId = search.split('workoutId=')[1]

  const pollingInterval = Number(process.env['REACT_APP_POLLING_INTERVAL'])
  const { isError, isLoading, data } = useFindByFieldQuery(workoutId, {
    pollingInterval,
  })

  const [findByIdAndUpdate, {}] = useFindByIdAndUpdateMutation()
  const [findByIdAndDelete, {}] = useFindByIdAndDeleteMutation()

  const dispatch = useAppDispatch()

  const { show } = drawerSlice.actions
  const { fix } = appSlice.actions
  const { updateStatus } = useStatus()

  const onClickStatus = (item: ExerciseType) => {
    findByIdAndUpdate({
      ...item,
      status: updateStatus(item.status),
    })
  }

  const onClickDrawer = (item: ExerciseType) => {
    dispatch(updateFormUpdate(item))
    dispatch(show('update'))
    dispatch(fix())
  }

  const onClickApproach = (item: ExerciseType, optionId: number) => {
    const option = item.option.map((option) => {
      if (option.id === optionId) {
        option = { ...option, completed: !option.completed }
      }
      return option
    })
    findByIdAndUpdate({ ...item, option })
  }

  if (isLoading) {
    return <Empty children={<Loader />} />
  }

  if (isError) {
    return <Empty children={'Произошла ошибка'} />
  }

  if (data && data.length === 0) {
    return <Empty children={'Упражнений нет 🌱'} />
  }

  return (
    <div className={css.list}>
      {data &&
        data.map((item) => (
          <React.Fragment key={item._id}>
            <Info
              props={{
                title: item.title,
                description: item.description,
                status: item.status,
                progress: item.status === 'Завершено' ? 100 : 0,
                onClickStatus: () => onClickStatus(item),
                onClickDrawer: () => onClickDrawer(item),
                onClickDelete: () => findByIdAndDelete(item),
              }}
            />
            <React.Fragment>
              {item.title !== 'Бег' && item.option.length > 0 && (
                <ApproachList>
                  {item.option.map((option) => (
                    <React.Fragment key={option.id}>
                      <Approach
                        props={option}
                        onClick={() => onClickApproach(item, option.id)}
                      />
                    </React.Fragment>
                  ))}
                </ApproachList>
              )}
              {item.title === 'Бег' && (
                <React.Fragment>
                  {item.option.map((option) => (
                    <Property key={option.id} props={option} />
                  ))}
                </React.Fragment>
              )}
            </React.Fragment>
          </React.Fragment>
        ))}
    </div>
  )
}

export default List
