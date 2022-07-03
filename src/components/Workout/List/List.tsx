import { FC } from 'react'
import Groop from '../Groop/Groop'
import { listData } from './list.data'
import css from './List.module.scss'

const List: FC = () => {
  return (
    <div className={css.list}>
      {listData.map((item) => (
        <>
          {item.groop.length >= 2 ? (
            <div className={css.groop}>
              <Groop id={item.id} key={item.id} groop={item.groop} />
            </div>
          ) : (
            <div className={css.item}>
              <Groop id={item.id} key={item.id} groop={item.groop} />
            </div>
          )}
        </>
      ))}
    </div>
  )
}

export default List
