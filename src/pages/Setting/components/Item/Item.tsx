import { FC, MouseEventHandler } from 'react'
import Switch from '../../../../components/Switch/Switch'
import style from './Item.module.scss'

export type ItemPropsType = {
  props: {
    title: string
    description: string
    checked: boolean
  }
  className?: string
  onClick?: MouseEventHandler
}

const Item: FC<ItemPropsType> = ({ props, className, onClick }) => {
  return (
    <div className={`${style.item} ${className}`}>
      <div className={style.left}>
        <div className={style.title}>{props.title}</div>
        <div className={style.description}>{props.description}</div>
      </div>
      <div className={style.right}>
        <Switch props={{ checked: props.checked }} onClick={onClick} />
      </div>
    </div>
  )
}

export default Item
