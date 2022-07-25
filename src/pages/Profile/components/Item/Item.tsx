import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import style from './Item.module.scss'

export type ItemPropsType = {
  props: {
    to: string
    icon: ReactNode
    title: string
    description: string
    counter: number
  }
}

const Item: FC<ItemPropsType> = ({ props }) => {
  return (
    <Link to={props.to} className={style.item}>
      <div className={style.left}>
        {props.icon}
        <div className={style.info}>
          <div className={style.title}>{props.title}</div>
          <div className={style.description}>{props.description}</div>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.counter}>{props.counter}</div>
      </div>
    </Link>
  )
}

export default Item
