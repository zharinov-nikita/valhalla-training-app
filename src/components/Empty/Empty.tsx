import { FC, ReactNode } from 'react'
import css from './Empty.module.scss'

export type EmptyPropsType = {
  children?: ReactNode
}

const Empty: FC<EmptyPropsType> = ({ children }) => {
  return (
    <div className={css.empty}>
      <div className={css.container}>
        <div className={css.wrapper}>{children && children}</div>
      </div>
    </div>
  )
}

export default Empty
