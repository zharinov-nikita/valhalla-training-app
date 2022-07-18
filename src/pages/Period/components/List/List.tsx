import React, { FC } from 'react'
import { useLocation } from 'react-router-dom'
import AffixButton from '../../../../components/AffixButton/AffixButton'
import Drawer from '../../../../components/Drawer/Drawer'
import Info from '../../../../components/Info/Info'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import { drawerSlice } from '../../../../redux/drawer/drawer.slice'
import { appSlice } from '../../../../redux/app/app.slice'
import {
  useFindByIdAndUpdateMutation,
  useFindByIdAndDeleteMutation,
  useFindByFieldQuery,
} from '../../../../redux/period/period.service'
import { updateFormUpdate } from '../../../../redux/period/period.slice'
import DrawerCreate from '../../components/Drawer/DrawerCreate'
import DrawerUpdate from '../../components/Drawer/DrawerUpdate'
import css from './List.module.scss'
import Empty from '../../../../components/Empty/Empty'
import Loader from '../../../../components/Loader/Loader'
import { useStatus } from '../../../../hooks/useStatus'

const List: FC = () => {
  const { search } = useLocation()
  const planId = search.split('planId=')[1]

  const pollingInterval = Number(process.env['REACT_APP_POLLING_INTERVAL'])
  const { isError, isLoading, data } = useFindByFieldQuery(planId, {
    pollingInterval,
  })

  const [findByIdAndUpdate, {}] = useFindByIdAndUpdateMutation()
  const [findByIdAndDelete, {}] = useFindByIdAndDeleteMutation()
  const dispatch = useAppDispatch()

  const { show } = drawerSlice.actions
  const { fix } = appSlice.actions
  const { updateStatus } = useStatus()

  if (isLoading) {
    return <Empty children={<Loader />} />
  }

  if (isError) {
    return <Empty children={'Произошла ошибка'} />
  }

  if (data && data.length === 0) {
    return <Empty children={'Периодов нет 🌱'} />
  }

  return (
    <div className={css.list}>
      {data &&
        data.map((item) => (
          <Info
            key={item._id}
            props={{
              to: `/cycle/?periodId=${item._id}`,
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
