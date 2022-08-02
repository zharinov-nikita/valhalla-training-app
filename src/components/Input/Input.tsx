import { FC, ChangeEventHandler } from 'react'
import List from '../List/List'
import style from './Input.module.scss'

export type InputPropsType = {
  value: string
  placeholder?: string
  message?: string
  label?: string
  type?: 'default' | 'error'
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const Input: FC<InputPropsType> = ({
  value,
  placeholder,
  message,
  type,
  label,
  onChange,
}) => {
  return (
    <List className={style.block} gap={4}>
      {label && !message && <span className={style.label}>{label}</span>}
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
