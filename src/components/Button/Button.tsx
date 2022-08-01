import { FC, MouseEventHandler, ReactNode } from 'react'
import style from './Button.module.scss'

export type ButtonPropsType = {
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
  onClick?: MouseEventHandler
}

const Button: FC<ButtonPropsType> = ({
  text,
  block,
  color,
  size,
  border,
  disabled,
  palette,
  action,
  onClick,
}) => {
  return (
    <button
      className={style.button}
      data-color-value={color?.value}
      data-color-type={color?.type}
      data-size={size}
      data-block={block}
      disabled={disabled}
      data-border={border}
      data-palette={!color && palette}
      onClick={onClick}
    >
      {text}
      {action && <span className={style.action}>{action}</span>}
    </button>
  )
}

export default Button
