import { FC } from 'react'
import Tag from '../../Tag/Tag'
import style from './List.module.scss'

export type ListPropsType = {
  props: Array<{ id: number | string; key: string; value: number | string }>
}

const List: FC<ListPropsType> = ({ props }) => {
  return (
    <div className={style.list}>
      {props.map((item, index) => (
        <div className={style.item} key={item.id}>
          <div className={style.key}>
            {index + 1}. {item.key}
          </div>
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
