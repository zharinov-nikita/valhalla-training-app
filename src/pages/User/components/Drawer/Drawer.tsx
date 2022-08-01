import { FC, useEffect, useMemo, useState } from 'react'
import { useAppDispatch } from '../../../../hooks/store/useAppDispatch'
import { useAppSelector } from '../../../../hooks/store/useAppSelector'
import { userSlice } from '../../../../redux/user/user.slice'
import Button from '../../../../components/Common/Button/Button'
import CommonDrawer from '../../../../components/Common/Drawer/Drawer'
import Input from '../../../../components/Common/Input/Input'
import List from '../../../../components/Common/List/List'
import { useFindByIdAndUpdateMutation } from '../../../../redux/user/user.service'
import { drawerSlice } from '../../../../redux/drawer/drawer.slice'

type keyType = 'firstname' | 'lastname' | 'role' | 'login' | 'password'

const Drawer: FC = () => {
  const [key, setKey] = useState<keyType>('firstname')
  const [findByIdAndUpdate, { isSuccess }] = useFindByIdAndUpdateMutation()
  const { type } = useAppSelector((state) => state.drawer)
  const { data } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  const { changeData } = userSlice.actions
  const { hide } = drawerSlice.actions
  const text = `Обновить ${type !== 'Фамилия' ? type?.toLowerCase() : 'фамилию'}`

  useMemo(() => {
    if (type === 'Имя') {
      setKey('firstname')
    }
    if (type === 'Фамилия') {
      setKey('lastname')
    }
    if (type === 'Роль') {
      setKey('role')
    }
    if (type === 'Логин') {
      setKey('login')
    }
    if (type === 'Пароль') {
      setKey('password')
    }
  }, [type])

  useEffect(() => {
    if (isSuccess) {
      dispatch(hide())
    }
  }, [isSuccess])

  return (
    <CommonDrawer>
      <List gap={12}>
        <Input
          value={data[key]}
          placeholder={type}
          onChange={(e) => dispatch(changeData({ ...data, [key]: e.target.value }))}
        />
        <Button
          block={true}
          disabled={data[key].length === 0 ? true : false}
          size="medium"
          text={text}
          color={{ type: 'fill', value: 'purple' }}
          onClick={() => findByIdAndUpdate({ [key]: data[key] })}
        />
      </List>
    </CommonDrawer>
  )
}

export default Drawer
