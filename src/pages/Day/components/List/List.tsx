import React, { FC } from 'react'
import { useLocation } from 'react-router-dom'
import AffixButton from '../../../../components/AffixButton/AffixButton'
import Drawer from '../../../../components/Drawer/Drawer'
import Info from '../../../../components/Info/Info'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import { drawerSlice } from '../../../../redux/drawer/drawer.slice'
import {
  useFindByIdAndUpdateMutation,
  useFindByIdAndDeleteMutation,
  useFindByFieldQuery,
} from '../../../../redux/day/day.service'
import { updateFormUpdate } from '../../../../redux/day/day.slice'
import DrawerCreate from '../../components/Drawer/DrawerCreate'
import DrawerUpdate from '../../components/Drawer/DrawerUpdate'
import css from './List.module.scss'

const List: FC = () => {
  const { search } = useLocation()
  const cycleId = search.split('cycleId=')[1]

  const { isError, isLoading, data } = useFindByFieldQuery(cycleId, {
    pollingInterval: 3,
  })
  const [findByIdAndUpdate, {}] = useFindByIdAndUpdateMutation()
  const [findByIdAndDelete, {}] = useFindByIdAndDeleteMutation()
  const dispatch = useAppDispatch()
  const { show } = drawerSlice.actions
  const { action } = useAppSelector((state) => state.drawer)

  if (isLoading) {
    return <>Загрузка...</>
  }

  if (isError) {
    return <>Ошибка</>
  }

  if (data && data.length === 0) {
    return <>Дней нет</>
  }

  return (
    <div className={css.list}>
      {data &&
        data.map((item) => (
          <Info
            key={item._id}
            props={{
              to: `/workout/?dayId=${item._id}`,
              title: item.title,
              description: item.description,
              status: item.status,
              progress: item.status === 'Завершено' ? 100 : 0,
              onClickStatus: () =>
                findByIdAndUpdate({
                  ...item,
                  status:
                    item.status === 'Завершено' ? 'В работе' : 'Завершено',
                }),
              onClickDrawer: () => {
                dispatch(updateFormUpdate(item))
                dispatch(show('update'))
              },
              onClickDelete: () => findByIdAndDelete(item),
            }}
          />
        ))}

      <AffixButton
        props={{
          title: 'Новый день',
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
