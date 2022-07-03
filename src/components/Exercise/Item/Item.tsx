import { ExclamationCircleOutlined, FieldTimeOutlined } from '@ant-design/icons'
import { FC, ReactNode } from 'react'
import css from './Item.module.scss'

export type ItemPropsType = {
  props: {
    _id: number | string
    queue: number
    title: string
    description?: string
    tags: Array<{ name: string | number; icon?: ReactNode }>
  }
}

const Item: FC<ItemPropsType> = ({ props }) => {
  return (
    <div className={css.item}>
      <div className={css.body}>
        <div className={css.left}>{props.queue}</div>
        <div className={css.right}>
          <div className={css.header}>
            <div className={css.info}>
              <div className={css.title}>{props.title}</div>
              {props.description && (
                <div className={css.description}>{props.description}</div>
              )}
            </div>
            <div className={css.btn}>
              <span>Завершить</span>
              <span>
                <ExclamationCircleOutlined />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={css.footer}>
        {props.tags.map(({ icon, name }) => (
          <div className={css.tag} key={name}>
            <span>{name}</span>
            {icon && <span>{icon}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Item
