import { FC } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import css from './InputGroop.module.scss'

const InputGroop: FC = () => {
  return (
    <div className={css.inputs}>
      <Input props={{ name: 'title', value: 'title', placeholder: 'title' }} />
      <Input props={{ name: 'value', value: 'value', placeholder: 'value' }} />
      <Button props={{ text: 'Удалить' }} />
    </div>
  )
}

export default InputGroop
