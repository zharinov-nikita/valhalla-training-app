import { FC, useEffect, useState } from 'react'
import css from './Login.module.scss'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { appSlice } from '../../redux/app/app.slice'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import axios from 'axios'
import { UserType } from '../../redux/user/user.service'

const apiKey = String(process.env['REACT_APP_API_KEY'])
const apiBaseUrl = String(process.env['REACT_APP_API_BASE_URL'])

const Token: FC = () => {
  const [error, setError] = useState<boolean>(false)
  const [form, setForm] = useState<{ login: string; password: string }>({
    login: '',
    password: '',
  })
  const [disabled, setDisabled] = useState<boolean>(true)

  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.app)
  const { updateUser } = appSlice.actions

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value })
  }

  const auth = async () => {
    try {
      const isUser = await axios.get<UserType[]>(`${apiBaseUrl}/user`, {
        headers: {
          'api-key': apiKey,
          login: form.login,
          password: form.password,
        },
      })

      if (isUser.data.length === 0) {
        setError(true)
        return setForm({ login: '', password: '' })
      }

      localStorage.setItem('login', String(form.login))
      localStorage.setItem('password', String(form.password))
      dispatch(
        updateUser({ ...user, login: form.login, password: form.password })
      )
      return window.location.replace('/user')
    } catch (e) {
      setError(true)
      setForm({ login: '', password: '' })
    }
  }

  useEffect(() => {
    if (form.login.length === 0 || form.password.length === 0) {
      return setDisabled(true)
    }
    if (form.login.length !== 0 && form.password.length !== 0) {
      setError(false)
      return setDisabled(false)
    }
  }, [form.login, form.password])

  const onClick = () => auth()

  return (
    <div className={css.token}>
      <div className={css.container}>
        <div className={css.wrapper}>
          <div className={css.modal}>
            <div className={css.header}>
              {error && 'Неверный логин или пароль'}
            </div>
            <div className={css.body}>
              <Input
                props={{
                  name: 'login',
                  placeholder: 'Логин',
                  value: form.login,
                  onChange,
                }}
              />
              <Input
                props={{
                  name: 'password',
                  placeholder: 'Пароль',
                  value: form.password,
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Token
