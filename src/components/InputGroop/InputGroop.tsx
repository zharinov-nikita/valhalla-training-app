import { FC } from 'react'
import Input from '../Input/Input'
import css from './InputGroop.module.scss'

const InputGroop: FC = () => {
  return (
    <div className={css.inputs}>
      <Input props={{ name: '', value: '', placeholder: '' }} />
      <Input props={{ name: '', value: '', placeholder: '' }} />
    </div>
  )
}

export default InputGroop
