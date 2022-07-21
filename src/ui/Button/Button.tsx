import { FC, ReactNode } from 'react'

import './Button.scss'

export type ButtonPropsType = {
  text: string | ReactNode
  color: 'gray' | 'blue' | 'green' | 'red' | 'yellow'
  typeColor: 'fill' | 'transparent'
  block?: boolean
  disabled?: boolean
  border?: 'none' | 'solid'
  size: 'small' | 'medium' | 'large'
}

const Button: FC<ButtonPropsType> = ({
  text = 'Кнопка',
  color = 'gray',
  typeColor = 'transparent',
  block = false,
  border = 'none',
  disabled = false,
  size = 'medium',
}) => {
  return (
    <button
      className={`button ${color} ${typeColor}`}
      data-block={block}
      data-border={border}
      disabled={disabled}
      data-size={size}
    >
      <span>{text}</span>
    </button>
  )
}

export default Button
