import { FC } from 'react'
import List from '../../components/Common/List/List'
import Drawer from '../../components/User/Drawer/Drawer'
import Info from '../../components/User/Info/Info'
import SettingList from '../../components/User/SettingList/SettingList'
import { user } from './data'

const User: FC = () => {
  const { _id, firstname, lastname, role, login, password } = user
  const list = () => {
    if (!lastname) {
      return [
        { key: 'Идентификатор', value: _id },
        { key: 'Имя', value: firstname },
        { key: 'Роль', value: role },
        { key: 'Логин', value: login },
        { key: 'Пароль', value: password },
      ]
    }
    return [
      { key: 'Идентификатор', value: _id },
      { key: 'Имя', value: firstname },
      { key: 'Фамилия', value: lastname },
      { key: 'Роль', value: role },
      { key: 'Логин', value: login },
      { key: 'Пароль', value: password },
    ]
  }
  return (
    <List>
      <Drawer />
      <Info
        firstname={firstname}
        lastname={lastname}
        login={login}
        role={role}
      />
      <SettingList list={list()} />
    </List>
  )
}

export default User
