import { FC } from 'react'
import { useFindByLoginQuery } from '../../redux/user/user.service'

import List from '../../components/List/List'
import Drawer from './components/Drawer/Drawer'
import Info from './components/Info/Info'
import Setting from './components/Setting/Setting'
import { useAppSelector } from '../../hooks/store/useAppSelector'

const User: FC = () => {
  const { currentUser } = useAppSelector((state) => state.user)
  const { isError, isLoading, data } = useFindByLoginQuery({
    login: currentUser.login,
    password: currentUser.password,
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
