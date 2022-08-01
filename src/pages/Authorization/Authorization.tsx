import { FC, useState } from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import List from '../../components/List/List'

const Registration: FC = () => {
  const [form, setForm] = useState({
    login: '',
    password: '',
  })
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
      />
    </List>
  )
}

export default Registration
