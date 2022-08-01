import { FC, useState } from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import List from '../../components/List/List'

const Registration: FC = () => {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    role: '',
    login: '',
    password: '',
  })
  return (
    <List gap={12} type="block">
      <Input
        placeholder="Рагнар"
        value={form.firstname}
        label="Имя"
        onChange={(e) => setForm({ ...form, firstname: e.target.value })}
      />
      <Input
        placeholder="Лодброк"
        value={form.lastname}
        label="Фамилия"
        onChange={(e) => setForm({ ...form, lastname: e.target.value })}
      />
      <Input
        placeholder="Спортсмен"
        value={form.role}
        label="Роль"
        onChange={(e) => setForm({ ...form, role: e.target.value })}
      />
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
        text="Зарегистрироваться"
        color={{ type: 'fill', value: 'purple' }}
      />
    </List>
  )
}

export default Registration
