import { FC, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import Button from '../Button/Button'
import Input from '../Input/Input'
import css from './Modal.module.scss'

import AccessPrivate from './AccessPrivate'
import AccessOpen from './AccessOpen'

const Modal: FC = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token'])

  const accessToken = process.env['REACT_APP_TOKEN']

  const [text, setText] = useState<string>('Valhalla ID')
  const [token, setToken] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(true)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setToken(e.currentTarget.value)

  useEffect(() => {
    if (token === accessToken) {
      setDisabled(false)
      setText('Окей, летсгоууу!')
    }
    if (token !== accessToken) {
      setDisabled(true)
      setText('Valhalla ID')
    }
  }, [token])

  const onClick = () => setCookie('token', accessToken)

  return (
    <div
      className={css.modal}
      data-token={cookies.token === accessToken ? true : false}
    >
      <div className={css.container}>
        <div className={css.wrapper}>
          <div className={css.header}>
            {disabled ? <AccessPrivate /> : <AccessOpen />}
          </div>
          <div className={css.body}>
            <Input
              props={{
                name: 'token',
                placeholder: 'Vallhalla token',
                value: token,
                onChange,
              }}
            />
            <Button
              props={{
                block: true,
                text,
                type: 'primary',
                disabled,
                onClick,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
