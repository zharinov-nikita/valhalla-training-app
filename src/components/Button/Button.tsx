import { BugOutlined } from '@ant-design/icons'
import { FC, MouseEventHandler, ReactNode } from 'react'
import css from './Button.module.scss'

export type ButtonPropsType = {
  props: {
    text: string
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
      onClick={props.onClick}
    >
      <div className={css.text}>{props.text}</div>
      {props.icon && props.icon}
    </div>
  )
}

export default Button
