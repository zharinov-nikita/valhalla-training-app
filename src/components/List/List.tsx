import { FC, ReactNode } from 'react'
import style from './List.module.scss'

export type ListPropsType = {
  gap?: number
  type?: 'block'
  children: ReactNode
  className?: string
}

const List: FC<ListPropsType> = ({ gap, className, type, children }) => {
  return (
    <div
      className={`${style.list} ${className}`}
      style={{ gap }}
      data-type={type}
    >
      {children}
    </div>
  )
}

export default List
