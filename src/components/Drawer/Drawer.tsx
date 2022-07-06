import { FC, ReactNode, useState } from 'react'
import css from './Drawer.module.scss'

export type DrawerPropsType = {
  props: {
    close: boolean
    children?: ReactNode
  }
}

const Drawer: FC<DrawerPropsType> = ({ props }) => {
  const [close, setClose] = useState<boolean>(props.close)
  return (
    <div
      className={css.drawer}
      data-close={close}
      onClick={() => setClose(true)}
    >
      <div className={css.container}>
        <div className={css.wrapper}>{props.children}</div>
      </div>
    </div>
  )
}

export default Drawer
