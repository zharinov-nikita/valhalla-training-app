import { FC } from 'react'
import style from '../Setting.module.scss'
import Item from '../Item/Item'

export type ListPropsType = {
  list: Array<{ key: string; value: string }>
}

const List: FC<ListPropsType> = ({ list }) => {
  return (
    <div className={style.list}>
      {list.map(({ key, value }) => (
        <Item key={key} settingKey={key} settingValue={value} />
      ))}
    </div>
  )
}

export default List
