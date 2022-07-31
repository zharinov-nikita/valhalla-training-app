import { FC, ChangeEventHandler, useState } from 'react'
import style from './Input.module.scss'

export type InputPropsType = {
  value: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const Input: FC<InputPropsType> = ({ value, onChange }) => {
  return <input className={style.input} value={value} onChange={onChange} />
}

export default Input
