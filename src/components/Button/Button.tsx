import { BugOutlined } from '@ant-design/icons'
import { FC, ReactNode } from 'react'
import css from './Button.module.scss'

export type ButtonPropsType = {
  props: {
    text: string
    icon?: ReactNode
  }
}

const Button: FC<ButtonPropsType> = ({ props }) => {
  return (
    <div className={css.button}>
      <div className={css.text}>{props.text}</div>
      {props.icon && props.icon}
    </div>
  )
}

export default Button
