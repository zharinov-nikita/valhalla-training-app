import { FC } from 'react'
import Tag from '../../Tag/Tag'
import style from './List.module.scss'

export type ListPropsType = {
  props: {
    list: Array<{ id: number | string; key: string; value: number | string }>
  }
}

const List: FC<ListPropsType> = ({ props }) => {
  return (
    <div className={style.list}>
      {props.list.map((item) => (
        <div className={style.item} key={item.id}>
          <div className={style.key}>{item.key}</div>
          <Tag
            props={{
              size: 'small',
              color: { type: 'transparent', value: 'yellow' },
              text: item.value,
            }}
          />
        </div>
      ))}
    </div>
  )
}

export default List
