import { FC } from 'react'
import { useFindByLoginQuery } from '../../redux/user/user.service'

import List from '../../components/List/List'
import Drawer from './components/Drawer/Drawer'
import Info from './components/Info/Info'
import Setting from './components/Setting/Setting'
import { useAppSelector } from '../../hooks/store/useAppSelector'
import { current } from '@reduxjs/toolkit'

const User: FC = () => {
  const { newLogin, newPassword } = useAppSelector((state) => state.user)
  const { currentUser } = useAppSelector((state) => state.authorization)
  const { isError, isLoading, data } = useFindByLoginQuery({
    _id: currentUser._id,
    login: newLogin && newLogin,
    password: newPassword && newPassword,
  })

  if (isError) {
    return <>Ошибка</>
  }

  if (isLoading) {
    return <>Загрузка...</>
  }

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
          <Setting
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
