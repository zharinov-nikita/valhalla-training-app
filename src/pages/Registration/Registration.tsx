import { FC } from 'react'
import Input from '../../components/Input/Input'
import List from '../../components/List/List'

const Registration: FC = () => {
  return (
    <List>
      <Input placeholder="Имя" value="" />
      <Input placeholder="Фамилия" value="" />
      <Input placeholder="Роль" value="" />
      <Input placeholder="Логин" value="" />
      <Input placeholder="Пароль" value="" />
    </List>
  )
}

export default Registration
