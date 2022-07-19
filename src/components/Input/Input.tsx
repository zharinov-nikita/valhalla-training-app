import { ChangeEventHandler, FC, useState } from 'react'
import css from './Input.module.scss'

export type InputPropsType = {
  props: {
    name: string
    placeholder: string
    value: string
    onChange?: ChangeEventHandler
  }
}

const Input: FC<InputPropsType> = ({ props }) => {
  return (
    <input
      type={'text'}
      name={props.name}
      className={css.input}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

export default Input
