import { FC, ReactNode } from 'react'
import style from './Drawer.module.scss'

export type DrawerPropsType = {
  visible: boolean
  children: ReactNode
}

const Drawer: FC<DrawerPropsType> = ({ visible, children }) => {
  return (
    <div className={style.drawer} data-visible={visible}>
      <div className={style.container}>
        <div className={style.wrapper}>{children}</div>
      </div>
    </div>
  )
}

export default Drawer
