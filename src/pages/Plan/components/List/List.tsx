import React, { FC, useState } from 'react'
import AffixButton from '../../../../components/AffixButton/AffixButton'
import Drawer from '../../../../components/Drawer/Drawer'
import Info from '../../../../components/Info/Info'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import { drawerSlice } from '../../../../redux/drawer/drawer.slice'
import { appSlice } from '../../../../redux/app/app.slice'
import {
  useFindQuery,
  useFindByIdAndUpdateMutation,
  useFindByIdAndDeleteMutation,
} from '../../../../redux/plan/plan.service'
import { updateFormUpdate } from '../../../../redux/plan/plan.slice'
import DrawerCreate from '../../components/Drawer/DrawerCreate'
import DrawerUpdate from '../../components/Drawer/DrawerUpdate'
import css from './List.module.scss'

const List: FC = () => {
  const pollingInterval = Number(process.env['REACT_APP_POLLING_INTERVAL'])
  const { isError, isLoading, data } = useFindQuery('', { pollingInterval })

  const [findByIdAndUpdate, {}] = useFindByIdAndUpdateMutation()
  const [findByIdAndDelete, {}] = useFindByIdAndDeleteMutation()
  const dispatch = useAppDispatch()
  const { show } = drawerSlice.actions
  const { action } = useAppSelector((state) => state.drawer)
  const { fix } = appSlice.actions

  if (isLoading) {
    return <>Загрузка...</>
  }

  if (isError) {
    return <>Ошибка</>
  }

  if (data && data.length === 0) {
    return <>Планов нет</>
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
          <Info
            key={item._id}
            props={{
              to: `/period/?planId=${item._id}`,
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

      <AffixButton
        props={{
          title: 'Новый план',
          onClick: () => dispatch(show('create')),
        }}
      />

      <Drawer
        children={
          <React.Fragment>
            {action === 'update' && <DrawerUpdate />}
            {action === 'create' && <DrawerCreate />}
          </React.Fragment>
        }
      />
    </div>
  )
}

export default List
