import { FC } from 'react'
import List from '../../components/Common/List/List'
import Drawer from './components/Drawer/Drawer'
import Info from './components/Info/Info'
import SettingList from './components/SettingList/SettingList'
import { useFindByIdQuery } from '../../redux/user/user.service'

const User: FC = () => {
  const { isError, isLoading, data } = useFindByIdQuery('')

  return (
    <>
      {data && (
        <List>
          <Drawer />
          <Info
            firstname={data.firstname}
            lastname={data.lastname}
            login={data.login}
            role={data.role}
          />
          <SettingList
            list={[
              { key: 'Идентификатор', value: data?._id },
              { key: 'Имя', value: data?.firstname },
              { key: 'Фамилия', value: data?.lastname },
              { key: 'Роль', value: data?.role },
              { key: 'Логин', value: data?.login },
              { key: 'Пароль', value: data?.password },
            ]}
          />
        </List>
      )}
    </>
  )
}

export default User
