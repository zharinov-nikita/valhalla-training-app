import { FC } from 'react'
import Input from '../Input/Input'
import css from './InputGroop.module.scss'

const InputGroop: FC = () => {
  return (
    <div className={css.inputs}>
      <Input props={{ name: 'title', value: 'title', placeholder: 'title' }} />
      <Input props={{ name: 'value', value: 'value', placeholder: 'value' }} />
    </div>
  )
}

export default InputGroop
