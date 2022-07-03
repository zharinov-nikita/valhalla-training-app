import { FC } from 'react'
import css from './List.module.scss'
import Item from '../Item/Item'
import { listData } from './list.data'

const List: FC = () => {
  return (
    <div className={css.list}>
      <div className={css.groop}>
        {listData.map(({ option }) => (
          <Item key={option.id} option={option} />
        ))}
      </div>
      {listData.map(({ option }) => (
        <Item key={option.id} option={option} />
      ))}
    </div>
  )
}

export default List
