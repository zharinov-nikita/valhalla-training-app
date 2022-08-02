import { FC, ReactNode } from 'react'
import { useAppDispatch } from '../../hooks/store/useAppDispatch'
import { useAppSelector } from '../../hooks/store/useAppSelector'
import { drawerSlice } from '../../redux/drawer/drawer.slice'
import style from './Drawer.module.scss'

export type DrawerPropsType = {
  children?: ReactNode
}

const Drawer: FC<DrawerPropsType> = ({ children }) => {
  const dispatch = useAppDispatch()
  const { hide } = drawerSlice.actions
  const { visible } = useAppSelector((state) => state.drawer)
  const drawerHide = () => dispatch(hide())
  return (
    <div className={style.drawer} data-visible={visible} onClick={drawerHide}>
      <div className={style.container}>
        <div className={style.wrapper} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Drawer
