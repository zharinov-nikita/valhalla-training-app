import React, { FC } from 'react'
import AffixButton from '../../components/AffixButton/AffixButton'
import Drawer from '../../components/Drawer/Drawer'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { drawerSlice } from '../../redux/drawer/drawer.slice'
import { appSlice } from '../../redux/app/app.slice'
import DrawerCreate from './components/Drawer/DrawerCreate'
import DrawerUpdate from './components/Drawer/DrawerUpdate'
import List from './components/List/List'

const Cycle: FC = () => {
  const dispatch = useAppDispatch()
  const { show } = drawerSlice.actions
  const { action } = useAppSelector((state) => state.drawer)
  const { fix } = appSlice.actions

  return (
    <React.Fragment>
      <List />
      <AffixButton
        props={{
          title: 'Новый цикл',
          onClick: () => {
            dispatch(show('create'))
            dispatch(fix())
          },
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
    </React.Fragment>
  )
}

export default Cycle
