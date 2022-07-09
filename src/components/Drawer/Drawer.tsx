import { FC, ReactNode } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { drawerSlice } from '../../redux/drawer/drawer.slice'
import css from './Drawer.module.scss'

export type DrawerPropsType = {
  children?: ReactNode
}

const Drawer: FC<DrawerPropsType> = ({ children }) => {
  const { visible } = useAppSelector((state) => state.drawer)
  const dispatch = useAppDispatch()
  const { hide } = drawerSlice.actions

  return (
    <div
      className={css.drawer}
      data-visible={visible}
      onClick={(e) => dispatch(hide())}
    >
      <div className={css.container}>
        <div className={css.wrapper} onClick={(e) => e.stopPropagation()}>
          {children && children}
        </div>
      </div>
    </div>
  )
}

export default Drawer
