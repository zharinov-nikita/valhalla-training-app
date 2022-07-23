import { FC, MouseEventHandler, ReactNode } from 'react'
import style from './Button.module.scss'

export type ButtonPropsType = {
  props: {
    text: string | ReactNode
    block: boolean
    color?: {
      type: 'fill' | 'transparent'
      value: 'purple' | 'green' | 'red' | 'yellow'
    }
    size: 'small' | 'medium'
    disabled?: boolean
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
      onClick={onClick}
    >
      {props.text}
    </button>
  )
}

export default Button
