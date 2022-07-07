import { FC, ReactNode } from 'react'
import css from './List.module.scss'

export type ListPropsType = {
  props: {
    children: ReactNode
  }
}

const List: FC<ListPropsType> = ({ props }) => {
  return <div className={css.list}>{props.children}</div>
}

export default List
