import { FC, ReactNode } from 'react'
import style from './List.module.scss'

export type ListPropsType = {
  gap?: number
  children: ReactNode
  className?: string
}

const List: FC<ListPropsType> = ({ gap, className, children }) => {
  return (
    <div className={`${style.list} ${className}`} style={{ gap }}>
      {children}
    </div>
  )
}

export default List
