import { FC } from 'react'
import List from '../../components/Common/List/List'
import Drawer from '../../components/User/Drawer/Drawer'
import Info from '../../components/User/Info/Info'
import SettingList from '../../components/User/SettingList/SettingList'

const User: FC = () => {
  return (
    <List>
      <Drawer />
      <Info
        firstname="Данил"
        lastname="Жаринов"
        login="zharinov_danil"
        role="Спортсмен"
      />
      <SettingList
        list={[
          { key: 'Имя', value: 'Данил' },
          { key: 'Фамилия', value: 'Жаринов' },
          { key: 'Роль', value: 'Спортсмен' },
          { key: 'Логин', value: 'zharinov_danil' },
          { key: 'Пароль', value: 'password' },
        ]}
      />
    </List>
  )
}

export default User
