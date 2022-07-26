import { FC, ReactNode, useState } from 'react'
import style from './Card.module.scss'
import Switch from '../Switch/Switch'

export type CardPropsType = {
  props: {
    visible: boolean
    icon: ReactNode
    title: string
    description?: ReactNode | string
  }
  children: ReactNode
}

const Card: FC<CardPropsType> = ({ props, children }) => {
  const [visible, setVisible] = useState<boolean>(props.visible)
  return (
    <div className={style.card}>
      <div className={style.hint}>
        <div className={style.header}>
          <div className={style.left}>
            {props.icon}
            <div className={style.info}>
              <div className={style.title}>{props.title}</div>
              {props.description && (
                <div className={style.description}>{props.description}</div>
              )}
            </div>
          </div>
          <div className={style.right}>
            <Switch
              props={{ checked: visible }}
              onClick={() => setVisible(!visible)}
            />
          </div>
        </div>
        <div className={style.body} data-visible={visible}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Card
