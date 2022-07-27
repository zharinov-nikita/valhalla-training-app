import { FC, MouseEventHandler, ReactNode } from 'react'
import style from './Icon.module.scss'

export type IconPropsType = {
  props: {
    children: string | ReactNode
    color?: {
      type: 'fill' | 'transparent'
      value: 'purple' | 'green' | 'red' | 'yellow'
    }
    border?: 'solid'
    size?: 'small' | 'medium' | 'large'
    palette?: boolean
  }

  onClick?: MouseEventHandler
}

const Icon: FC<IconPropsType> = ({ props, onClick }) => {
  return (
    <div
      className={style.icon}
      onClick={onClick}
      data-color-type={props.color?.type}
      data-color-value={props.color?.value}
      data-border={props.border}
      data-size={props.size}
      data-palette={!props.color && props.palette}
    >
      {props.children}
    </div>
  )
}

export default Icon
