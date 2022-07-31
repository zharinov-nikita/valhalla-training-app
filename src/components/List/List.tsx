import { FC, ReactNode } from 'react'
import style from './List.module.scss'

export type ListPropsType = {
  props?: {
    gap: number
  }
  children: ReactNode
  className?: string
}

const List: FC<ListPropsType> = ({ props, className, children }) => {
  return (
    <div className={`${style.list} ${className}`} style={{ gap: props?.gap }}>
      {children}
    </div>
  )
}

export default List
