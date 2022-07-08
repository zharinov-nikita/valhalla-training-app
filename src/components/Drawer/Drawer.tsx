import { FC } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { drawerSlice } from '../../redux/drawer/drawer.slice'
import css from './Drawer.module.scss'

const Drawer: FC = () => {
  const { visible, components } = useAppSelector((state) => state.drawer)
  const dispatch = useAppDispatch()
  const { hide } = drawerSlice.actions

  return (
    <div
      className={css.drawer}
      data-visible={visible}
      onClick={(e) => dispatch(hide())}
    >
      <div className={css.container} onClick={(e) => e.stopPropagation()}>
        <div className={css.wrapper}>{components}</div>
      </div>
    </div>
  )
}

export default Drawer
