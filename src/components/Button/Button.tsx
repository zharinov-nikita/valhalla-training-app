import { FC, MouseEventHandler, ReactNode } from 'react'
import css from './Button.module.scss'

export type ButtonPropsType = {
  props: {
    size?: 'small' | 'defalut' | 'large'
    type?: 'primary' | 'secondary'
    text?: string
    icon?: ReactNode
    block?: boolean
    onClick?: MouseEventHandler
  }
}

const Button: FC<ButtonPropsType> = ({ props }) => {
  return (
    <div
      className={css.button}
      data-block={props.block}
      data-type={props.type}
      data-size={props.size}
      onClick={props.onClick}
    >
      {props.text && <div className={css.text}>{props.text}</div>}
      {props.icon && props.icon}
    </div>
  )
}

export default Button
