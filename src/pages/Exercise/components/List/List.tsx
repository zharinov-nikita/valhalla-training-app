import React, { FC } from 'react'
import { useLocation } from 'react-router-dom'
import AffixButton from '../../../../components/AffixButton/AffixButton'
import Approach from '../../../../components/Approach/Approach'
import ApproachList from '../../../../components/Approach/ApproachList'
import Drawer from '../../../../components/Drawer/Drawer'
import Info from '../../../../components/Info/Info'
import Property from '../../../../components/Property/Property'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import { drawerSlice } from '../../../../redux/drawer/drawer.slice'
import { appSlice } from '../../../../redux/app/app.slice'
import {
  useFindByIdAndUpdateMutation,
  useFindByIdAndDeleteMutation,
  useFindByFieldQuery,
} from '../../../../redux/exercise/exercise.service'
import { updateFormUpdate } from '../../../../redux/exercise/exercise.slice'
import DrawerCreate from '../../components/Drawer/DrawerCreate'
import DrawerUpdate from '../../components/Drawer/DrawerUpdate'
import css from './List.module.scss'
import Loader from '../../../../components/Loader/Loader'
import Empty from '../../../../components/Empty/Empty'

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
  const { action } = useAppSelector((state) => state.drawer)
  const { fix } = appSlice.actions

  if (isLoading) {
    return <Empty children={<Loader />} />
  }

  if (isError) {
    return <Empty children={'Произошла ошибка'} />
  }

  if (data && data.length === 0) {
    return <Empty children={'Упражнений нет 🌱'} />
  }

  const updateStatus = (status: string): string => {
    if (status === 'Запланировано') {
      return 'В работе'
    }
    if (status === 'В работе') {
      return 'Завершено'
    }
    return 'Запланировано'
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
                onClickStatus: () =>
                  findByIdAndUpdate({
                    ...item,
                    status: updateStatus(item.status),
                  }),
                onClickDrawer: () => {
                  dispatch(updateFormUpdate(item))
                  dispatch(show('update'))
                  dispatch(fix())
                },
                onClickDelete: () => findByIdAndDelete(item),
              }}
            />
            <React.Fragment>
              {item.title !== 'Бег' && (
                <ApproachList>
                  {item.option.map((option) => (
                    <React.Fragment key={option.id}>
                      <Approach
                        props={option}
                        onClick={() => {
                          const result = item.option.map((mapOption) => {
                            if (mapOption.id === option.id) {
                              mapOption = {
                                ...mapOption,
                                completed: !mapOption.completed,
                              }
                            }
                            return mapOption
                          })
                          findByIdAndUpdate({ ...item, option: result })
                        }}
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
