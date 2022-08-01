import { FC, ChangeEventHandler, useState } from 'react'
import List from '../List/List'
import style from './Input.module.scss'

export type InputPropsType = {
  value: string
  placeholder?: string
  message?: string
  type?: 'default' | 'error'
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const Input: FC<InputPropsType> = ({ value, placeholder, message, type, onChange }) => {
  return (
    <List className={style.block} gap={8}>
      {message && <span className={style.message}>{message}</span>}
      <input
        className={style.input}
        value={value}
        placeholder={placeholder}
        data-type={type}
        onChange={onChange}
      />
    </List>
  )
}

export default Input
