import { FC } from 'react'
import css from './List.module.scss'
import Item from '../Item/Item'
import { listData } from './list.data'

const List: FC = () => {
  return (
    <div className={css.list}>
      {listData.map(({ option }) => (
        <Item option={option} key={option.name} />
      ))}
    </div>
  )
}

export default List
