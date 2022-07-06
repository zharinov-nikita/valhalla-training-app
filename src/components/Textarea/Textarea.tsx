import { FC, useState } from 'react'
import css from './Textarea.module.scss'

export type TextareaPropsType = {
  props: {
    name: string
    placeholder: string
    value: string
  }
}

const Textarea: FC<TextareaPropsType> = ({ props }) => {
  const [value, setValue] = useState(props.value)
  const onChange = (e: { target: HTMLTextAreaElement }) =>
    setValue(e.target.value)
  return (
    <textarea
      name={props.name}
      className={css.textarea}
      placeholder={props.placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default Textarea
