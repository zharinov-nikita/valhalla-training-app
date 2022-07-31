import { FC, useEffect } from 'react'
import List from '../../components/Common/List/List'
import Drawer from './components/Drawer/Drawer'
import Info from './components/Info/Info'
import SettingList from './components/SettingList/SettingList'
import { useFindByIdQuery } from '../../redux/user/user.service'
import { drawerSlice } from '../../redux/drawer/drawer.slice'
import { useAppDispatch } from '../../hooks/store/useAppDispatch'
import { userSlice } from '../../redux/user/user.slice'

const User: FC = () => {
  const { isError, isLoading, data } = useFindByIdQuery('')
  const { changeData } = userSlice.actions
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (data) {
      dispatch(changeData(data))
    }
  }, [data])

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
