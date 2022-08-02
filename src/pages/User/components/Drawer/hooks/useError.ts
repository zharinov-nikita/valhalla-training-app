import { useMemo, useState } from 'react'
import { InputPropsType } from '../../../../../components/Input/Input'
import { useAppSelector } from '../../../../../hooks/store/useAppSelector'

export function useError(isError: boolean) {
  const { type } = useAppSelector((state) => state.drawer)
  const [inputType, setInputType] = useState<InputPropsType['type']>('default')
  const [message, setMessage] = useState<string>('')

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

  return { inputType, message }
}
