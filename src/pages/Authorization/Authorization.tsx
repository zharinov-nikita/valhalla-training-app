import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import List from '../../components/List/List'
import { useAppDispatch } from '../../hooks/store/useAppDispatch'
import { useAuthorizationMutation } from '../../redux/user/user.service'
import { userSlice } from '../../redux/user/user.slice'

const Authorization: FC = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    login: '',
    password: '',
  })

  const dispatch = useAppDispatch()
  const { authorization, changeAuthData } = userSlice.actions
  const [authorizationMutation, { isSuccess }] = useAuthorizationMutation()

  useEffect(() => {
    if (isSuccess) {
      dispatch(changeAuthData({ login: form.login, password: form.password }))
      localStorage.setItem('login', String(form.login))
      localStorage.setItem('password', String(form.password))
      dispatch(authorization(true))
    }
  }, [isSuccess])

  return (
    <List gap={12} type="block">
      <Input
        placeholder="ragnar_lodbrock"
        value={form.login}
        label="Логин"
        onChange={(e) => setForm({ ...form, login: e.target.value })}
      />
      <Input
        placeholder="UEk4ujEt"
        value={form.password}
        label="Пароль"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <Button
        size="medium"
        block={true}
        text="Авторизоваться"
        color={{ type: 'fill', value: 'purple' }}
        onClick={() =>
          authorizationMutation({ login: form.login, password: form.password })
        }
      />
    </List>
  )
}

export default Authorization
