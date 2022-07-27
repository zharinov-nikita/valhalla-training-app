import { FC, MouseEventHandler, ReactNode, StyleHTMLAttributes } from 'react'
import style from './Button.module.scss'

export type ButtonPropsType = {
  props: {
    text: string | ReactNode
    block?: boolean
    color?: {
      type: 'fill' | 'transparent'
      value: 'purple' | 'green' | 'red' | 'yellow'
    }
    size: 'small' | 'medium'
    border?: 'solid'
    disabled?: boolean
    palette?: boolean
    action?: number
  }
  onClick?: MouseEventHandler
}

const Button: FC<ButtonPropsType> = ({ props, onClick }) => {
  return (
    <button
      className={style.button}
      data-color-value={props.color?.value}
      data-color-type={props.color?.type}
      data-size={props.size}
      data-block={props.block}
      disabled={props.disabled}
      data-border={props.border}
      data-palette={!props.color && props.palette}
      onClick={onClick}
    >
      {props.text}
      {props.action && <span className={style.action}>{props.action}</span>}
    </button>
  )
}

export default Button
