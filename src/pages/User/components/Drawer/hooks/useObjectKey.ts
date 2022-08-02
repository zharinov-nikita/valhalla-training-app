import { useMemo, useState } from 'react'
import { useAppSelector } from '../../../../../hooks/store/useAppSelector'

type keyType = 'firstname' | 'lastname' | 'role' | 'login' | 'password'

export function useObjectKey() {
  const { type } = useAppSelector((state) => state.drawer)
  const [key, setKey] = useState<keyType>('firstname')

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

  return { key }
}
