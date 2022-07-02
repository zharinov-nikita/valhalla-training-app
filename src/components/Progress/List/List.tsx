import { FC } from 'react'
import css from './List.module.scss'
import Item from '../Item/Item'
import { listData } from './list.data'

const List: FC = () => {
  return (
    <div className={css.list}>
      {listData.map(({ option }) => (
        <Item option={option} />
      ))}
    </div>
  )
}

export default List
