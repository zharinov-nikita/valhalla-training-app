import { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Info from '../../../../components/Info/Info'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { drawerSlice } from '../../../../redux/drawer/drawer.slice'
import { appSlice } from '../../../../redux/app/app.slice'
import {
  useFindByIdAndUpdateMutation,
  useFindByIdAndDeleteMutation,
  useFindByFieldQuery,
} from '../../../../redux/cycle/cycle.service'
import { updateFormUpdate } from '../../../../redux/cycle/cycle.slice'
import css from './List.module.scss'
import Loader from '../../../../components/Loader/Loader'
import Empty from '../../../../components/Empty/Empty'
import { useStatus } from '../../../../hooks/useStatus'

const List: FC = () => {
  const { search } = useLocation()
  const periodId = search.split('periodId=')[1]

  const pollingInterval = Number(process.env['REACT_APP_POLLING_INTERVAL'])
  const { isError, isLoading, data } = useFindByFieldQuery(periodId, {
    pollingInterval,
  })

  const [findByIdAndUpdate, {}] = useFindByIdAndUpdateMutation()
  const [findByIdAndDelete, {}] = useFindByIdAndDeleteMutation()
  const dispatch = useAppDispatch()

  const { show } = drawerSlice.actions
  const { fix, setCurrentWeek } = appSlice.actions
  const { updateStatus } = useStatus()

  if (isLoading) {
    return <Empty children={<Loader />} />
  }

  if (isError) {
    return <Empty children={'Произошла ошибка'} />
  }

  if (data && data.length === 0) {
    return <Empty children={'Циклов нет 🌱'} />
  }

  return (
    <div className={css.list}>
      {data &&
        data.map((item) => (
          <Info
            key={item._id}
            props={{
              to: `/day/?cycleId=${item._id}`,
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
        ))}
    </div>
  )
}

export default List
