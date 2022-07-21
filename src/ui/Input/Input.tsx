import { ChangeEventHandler, FC } from 'react'

import './Input.scss'

export type InputPropsType = {
  type: 'text' | 'number' | 'password'
  size: 'small' | 'medium' | 'large'
  color: 'gray' | 'blue' | 'green' | 'red' | 'yellow'
  border?: 'none' | 'solid'
  block: boolean
  value: string
  placeholder?: string
  onChange?: ChangeEventHandler
}

const Input: FC<InputPropsType> = ({
  type = 'text',
  size = 'medium',
  value = '',
  color = 'gray',
  border = 'solid',
  block = true,
  placeholder = 'placeholder',
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`input ${color}`}
      data-size={size}
      data-border={border}
      value={value}
      data-block={block}
      onChange={onChange}
    />
  )
}

export default Input
