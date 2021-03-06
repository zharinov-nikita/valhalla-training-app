import { useEffect, useMemo, useState } from 'react'
import { InputPropsType } from '../../../../../components/Input/Input'
import { useAppDispatch } from '../../../../../hooks/store/useAppDispatch'
import { useAppSelector } from '../../../../../hooks/store/useAppSelector'
import { authorizationSlice } from '../../../../../redux/authorization/authorization.slice'
import { drawerSlice } from '../../../../../redux/drawer/drawer.slice'
import { userSlice } from '../../../../../redux/user/user.slice'

type keyType = 'firstname' | 'lastname' | 'role' | 'login' | 'password'

export function useDrawer(isError: boolean, isSuccess: boolean) {
  const { type } = useAppSelector((state) => state.drawer)
  const [key, setKey] = useState<keyType>('firstname')
  const [message, setMessage] = useState<string>('')
  const [inputType, setInputType] = useState<InputPropsType['type']>('default')

  const { updateUser } = useAppSelector((state) => state.user)
  const { currentUser } = useAppSelector((state) => state.authorization)
  const dispatch = useAppDispatch()

  const { update, setNewLogin, setNewPassword } = userSlice.actions
  const { updateCurrentUser } = authorizationSlice.actions
  const { hide } = drawerSlice.actions

  const text = `Обновить ${type !== 'Фамилия' ? type?.toLowerCase() : 'фамилию'}`
  const disabled = updateUser[key].length === 0 ? true : false

  const handlerChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(update({ ...currentUser, [key]: e.target.value }))
  }

  useEffect(() => {
    dispatch(update(currentUser))
  }, [])

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem('currentUser', JSON.stringify(updateUser))
      dispatch(hide())
      dispatch(updateCurrentUser({ ...updateUser }))

      if (key === 'login') {
        dispatch(setNewLogin(updateUser.login))
      }

      if (key === 'password') {
        dispatch(setNewPassword(updateUser.password))
      }
    }
  }, [isSuccess, key])

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

  return {
    key,
    message,
    inputType,
    text,
    updateUser,
    currentUser,
    type,
    disabled,
    handlerChangeData,
  }
}
