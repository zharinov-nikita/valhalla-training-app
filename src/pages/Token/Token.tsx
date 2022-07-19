import { FC, useEffect, useState } from 'react'
import css from './Token.module.scss'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { appSlice } from '../../redux/app/app.slice'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

const Token: FC = () => {
  const isToken = String(process.env['REACT_APP_TOKEN'])
  const [token, setToken] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(true)

  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.app)
  const { updateUser } = appSlice.actions

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setToken(e.currentTarget.value)

  useEffect(() => {
    if (isToken === token) {
      setDisabled(false)
    }
  }, [token])

  const onClick = () => {
    localStorage.setItem('token', String(token))
    dispatch(updateUser({ ...user, token }))
  }

  return (
    <div className={css.token}>
      <div className={css.container}>
        <div className={css.wrapper}>
          <div className={css.modal}>
            <Input
              props={{
                name: 'token',
                placeholder: 'Valhalla token',
                value: token,
                onChange,
              }}
            />
            <Button
              props={{
                block: true,
                text: 'Авторизация',
                disabled,
                type: 'warning',
                onClick,
              }}
            />
            s
          </div>
        </div>
      </div>
    </div>
  )
}

export default Token
