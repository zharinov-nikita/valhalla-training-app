import { FC, useState } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import css from './Modal.module.scss'

const Modal: FC = () => {
  const [token, setToken] = useState<string>('')
  return (
    <div className={css.modal}>
      <div className={css.container}>
        <div className={css.wrapper}>
          <div className={css.header}></div>
          <div className={css.body}>
            <Input
              props={{ name: 'token', placeholder: 'token', value: 'token' }}
            />
            <Button
              props={{
                block: true,
                text: 'Окей, летсгоу',
                type: 'primary',
                disabled: true,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
