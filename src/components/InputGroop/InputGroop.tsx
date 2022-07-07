import { FC, MouseEventHandler, ReactNode } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import css from './InputGroop.module.scss'

export type InputGroopPropsType = {
  children: ReactNode
}

const InputGroop: FC<InputGroopPropsType> = ({ children }) => {
  return (
    <div className={css.inputs}>
      <Input props={{ name: 'title', value: 'title', placeholder: 'title' }} />
      <Input props={{ name: 'value', value: 'value', placeholder: 'value' }} />
      {children}
    </div>
  )
}

export default InputGroop
