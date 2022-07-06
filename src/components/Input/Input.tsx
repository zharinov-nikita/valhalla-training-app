import { FC, useState } from 'react'
import css from './Input.module.scss'

export type InputPropsType = {
  props: {
    name: string
    placeholder: string
    value: string
  }
}

const Input: FC<InputPropsType> = ({ props }) => {
  const [value, setValue] = useState(props.value)
  const onChange = (e: { target: HTMLInputElement }) => setValue(e.target.value)
  return (
    <input
      type="text"
      name={props.name}
      className={css.input}
      placeholder={props.placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
