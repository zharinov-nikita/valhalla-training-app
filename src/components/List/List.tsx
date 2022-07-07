import { FC, ReactNode } from 'react'
import css from './List.module.scss'

export type ListPropsType = {
  props: {
    gap: 12 | 14 | 16 | 18
    children?: ReactNode
  }
}

const List: FC<ListPropsType> = ({ props }) => {
  return (
    <div className={css.list} data-gap={props.gap}>
      {props.children}
    </div>
  )
}

List.defaultProps = {
  props: {
    gap: 12,
  },
}

export default List
