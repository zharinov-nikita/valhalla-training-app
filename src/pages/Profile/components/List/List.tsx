import { FC, ReactNode } from 'react'
import style from './List.module.scss'

export type ListPropsType = {
  children: ReactNode
}

const List: FC<ListPropsType> = ({ children }) => {
  return <div className={style.list}>{children}</div>
}

export default List
