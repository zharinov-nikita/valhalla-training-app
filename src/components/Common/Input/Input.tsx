import { FC, ChangeEventHandler, useState } from 'react'
import style from './Input.module.scss'

export type InputPropsType = {
  value: string
  placeholder?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const Input: FC<InputPropsType> = ({ value, placeholder, onChange }) => {
  return (
    <input
      className={style.input}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default Input
