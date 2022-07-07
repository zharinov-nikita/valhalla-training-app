import { FC, ReactNode } from 'react'
import css from './List.module.scss'

export type ListPropsType = {
  props: {
    gap: 12 | 14 | 16 | 18
  }
  children?: ReactNode
}

const List: FC<ListPropsType> = ({ props, children }) => {
  return (
    <div className={css.list} data-gap={props.gap}>
      {children}
    </div>
  )
}

List.defaultProps = {
  props: {
    gap: 12,
  },
}

export default List
