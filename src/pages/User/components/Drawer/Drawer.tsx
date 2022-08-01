import { FC, useEffect, useMemo, useState } from 'react'
import { useAppDispatch } from '../../../../hooks/store/useAppDispatch'
import { useAppSelector } from '../../../../hooks/store/useAppSelector'
import { userSlice } from '../../../../redux/user/user.slice'
import Button from '../../../../components/Common/Button/Button'
import CommonDrawer from '../../../../components/Common/Drawer/Drawer'
import Input, { InputPropsType } from '../../../../components/Common/Input/Input'
import List from '../../../../components/Common/List/List'
import { useFindByIdAndUpdateMutation } from '../../../../redux/user/user.service'
import { drawerSlice } from '../../../../redux/drawer/drawer.slice'

type keyType = 'firstname' | 'lastname' | 'role' | 'login' | 'password'

const Drawer: FC = () => {
  const [key, setKey] = useState<keyType>('firstname')
  const [message, setMessage] = useState<string>('')
  const [inputType, setInputType] = useState<InputPropsType['type']>('default')
  const [findByIdAndUpdate, { isSuccess, isError }] = useFindByIdAndUpdateMutation()
  const { type } = useAppSelector((state) => state.drawer)
  const { data } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  const { changeData } = userSlice.actions
  const { hide } = drawerSlice.actions
  const text = `Обновить ${type !== 'Фамилия' ? type?.toLowerCase() : 'фамилию'}`

  useMemo(() => {
    if (type === 'Имя') {
      setKey('firstname')
      setMessage('')
      setInputType('default')
    }
    if (type === 'Фамилия') {
      setKey('lastname')
      setMessage('')
      setInputType('default')
    }
    if (type === 'Роль') {
      setKey('role')
      setMessage('')
      setInputType('default')
    }
    if (type === 'Логин') {
      setKey('login')
      setMessage('')
      setInputType('default')
    }
    if (type === 'Пароль') {
      setKey('password')
      setMessage('')
      setInputType('default')
    }
  }, [type, isError])

  useMemo(() => {
    if (isError) {
      setInputType('error')

      if (type === 'Имя') {
        setMessage('Ошибка: невалидное имя')
      }
      if (type === 'Фамилия') {
        setMessage('Ошибка: невалидная фамилия')
      }
      if (type === 'Роль') {
        setMessage('Ошибка: роль может быть "Спортсмен" или "Тренер"')
      }
      if (type === 'Логин') {
        setMessage('Ошибка: такой логин уже существует')
      }
      if (type === 'Пароль') {
        setMessage('Ошибка: невалидный пароль')
      }
    }
    if (!isError) {
      setMessage('')
      setInputType('default')
    }
  }, [isError])

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
          message={message}
          type={inputType}
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
