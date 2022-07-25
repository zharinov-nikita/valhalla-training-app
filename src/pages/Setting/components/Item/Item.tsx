import { FC, useState } from 'react'
import Switch from '../../../../components/Switch/Switch'
import style from './Item.module.scss'

export type ItemPropsType = {
  props: {
    title: string
    description: string
    checked: boolean
  }
}

const Item: FC<ItemPropsType> = ({ props }) => {
  const [checked, setChecked] = useState<boolean>(props.checked)
  return (
    <div className={style.item}>
      <div className={style.left}>
        <div className={style.title}>{props.title}</div>
        <div className={style.description}>{props.description}</div>
      </div>
      <div className={style.right}>
        <Switch props={{ checked }} onClick={() => setChecked(!checked)} />
      </div>
    </div>
  )
}

export default Item
