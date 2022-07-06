import { ChangeEventHandler, FC, useState } from 'react'
import css from './Textarea.module.scss'

export type TextareaPropsType = {
  props: {
    name: string
    placeholder: string
    value: string
    onChange?: ChangeEventHandler
  }
}

const Textarea: FC<TextareaPropsType> = ({ props }) => {
  return (
    <textarea
      name={props.name}
      className={css.textarea}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

export default Textarea
