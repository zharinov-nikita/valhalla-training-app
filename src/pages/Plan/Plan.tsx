import React, { FC } from 'react'
import AffixButton from '../../components/AffixButton/AffixButton'
import Drawer from '../../components/Drawer/Drawer'
import Info from '../../components/Info/Info'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { drawerSlice } from '../../redux/drawer/drawer.slice'
import {
  useFindQuery,
  useFindByIdAndUpdateMutation,
} from '../../redux/plan/plan.service'
import { updateFormUpdate } from '../../redux/plan/plan.slice'
import DrawerCreate from './components/Drawer/DrawerCreate'
import DrawerUpdate from './components/Drawer/DrawerUpdate'
import css from './Plan.module.scss'

const Plan: FC = () => {
  const { isError, isLoading, data } = useFindQuery('')
  const [update, {}] = useFindByIdAndUpdateMutation()
  const dispatch = useAppDispatch()
  const { show } = drawerSlice.actions
  const { action } = useAppSelector((state) => state.drawer)

  return (
    <div className={css.list}>
      {isLoading && 'Загрузка...'}
      {isError && 'Ошибка'}

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
                update({
                  ...item,
                  status:
                    item.status === 'Завершено' ? 'В работе' : 'Завершено',
                }),
              onClickButton: () => {
                dispatch(updateFormUpdate(item))
                dispatch(show('update'))
              },
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

export default Plan
