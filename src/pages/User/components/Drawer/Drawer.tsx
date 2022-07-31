import { FC, useEffect, useState } from 'react'
import { useAppDispatch } from '../../../../hooks/store/useAppDispatch'
import { useAppSelector } from '../../../../hooks/store/useAppSelector'
import { userSlice } from '../../../../redux/user/user.slice'
import Button from '../../../../components/Common/Button/Button'
import CommonDrawer from '../../../../components/Common/Drawer/Drawer'
import Input from '../../../../components/Common/Input/Input'
import List from '../../../../components/Common/List/List'
import { useFindByIdAndUpdateMutation } from '../../../../redux/user/user.service'
import { drawerSlice } from '../../../../redux/drawer/drawer.slice'

const Drawer: FC = () => {
  const [findByIdAndUpdate, { isSuccess }] = useFindByIdAndUpdateMutation()
  const { type } = useAppSelector((state) => state.drawer)
  const { data } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  const { changeData } = userSlice.actions
  const { hide } = drawerSlice.actions
  const { firstname, lastname, role, login, password } = data

  useEffect(() => {
    if (isSuccess) {
      dispatch(hide())
    }
  }, [isSuccess])

  return (
    <CommonDrawer>
      <List gap={12}>
        {type === 'Имя' && (
          <Input
            value={data.firstname}
            placeholder={type}
            onChange={(e) =>
              dispatch(changeData({ ...data, firstname: e.target.value }))
            }
          />
        )}
        {type === 'Фамилия' && (
          <Input
            value={data.lastname}
            placeholder={type}
            onChange={(e) =>
              dispatch(changeData({ ...data, lastname: e.target.value }))
            }
          />
        )}
        {type === 'Роль' && (
          <Input
            value={data.role}
            placeholder={type}
            onChange={(e) =>
              dispatch(changeData({ ...data, role: e.target.value }))
            }
          />
        )}
        {type === 'Логин' && (
          <Input
            value={data.login}
            placeholder={type}
            onChange={(e) =>
              dispatch(changeData({ ...data, login: e.target.value }))
            }
          />
        )}
        {type === 'Пароль' && (
          <Input
            value={data.password}
            placeholder={type}
            onChange={(e) =>
              dispatch(changeData({ ...data, password: e.target.value }))
            }
          />
        )}
        <Button
          block={true}
          size="medium"
          text={`Обновить ${
            type !== 'Фамилия' ? type?.toLowerCase() : 'фамилию'
          }`}
          color={{ type: 'fill', value: 'purple' }}
          onClick={() =>
            findByIdAndUpdate({ firstname, lastname, role, login, password })
          }
        />
      </List>
    </CommonDrawer>
  )
}

export default Drawer
