import React, { FC } from 'react'
import AffixButton from '../../components/AffixButton/AffixButton'
import Drawer from '../../components/Drawer/Drawer'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { drawerSlice } from '../../redux/drawer/drawer.slice'
import DrawerCreate from './components/Drawer/DrawerCreate'
import DrawerUpdate from './components/Drawer/DrawerUpdate'
import List from './components/List/List'

const Plan: FC = () => {
  const dispatch = useAppDispatch()
  const { show } = drawerSlice.actions
  const { action } = useAppSelector((state) => state.drawer)

  return (
    <React.Fragment>
      <List />
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
    </React.Fragment>
  )
}

export default Plan
