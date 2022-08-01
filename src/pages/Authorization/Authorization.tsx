import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import List from '../../components/List/List'
import { useAppDispatch } from '../../hooks/store/useAppDispatch'
import { useAuthorizationMutation } from '../../redux/user/user.service'
import { userSlice } from '../../redux/user/user.slice'

const Authorization: FC = () => {
  const [form, setForm] = useState({
    login: '',
    password: '',
  })

  const dispatch = useAppDispatch()
  const { authorization, update } = userSlice.actions
  const [authorizationMutation, { isSuccess, data }] =
    useAuthorizationMutation()

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(authorization(data))
      dispatch(update(data))
    }
  }, [isSuccess, data])

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
