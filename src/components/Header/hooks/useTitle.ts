import { useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { headerSlice } from '../../../redux/header/header.slice'
import { useAppDispatch } from '../../../hooks/store/useAppDispatch'
import { useAppSelector } from '../../../hooks/store/useAppSelector'

const data = [
  { title: 'Авторизация', pathname: /login/ },
  { title: 'Аккаунт', pathname: /user/ },
  { title: 'План', pathname: /plan/ },
  { title: 'Период', pathname: /period/ },
  { title: 'Цикл', pathname: /cycle/ },
  { title: 'День', pathname: /day/ },
  { title: 'Тренировка', pathname: /workout/ },
  { title: 'Упражнение', pathname: /exercise/ },
]

export function useTitle() {
  const { title } = useAppSelector((state) => state.header)
  const dispatch = useAppDispatch()
  const { changeTitle } = headerSlice.actions
  const { pathname } = useLocation()

  useEffect(() => {
    data.forEach((item) => {
      if (pathname.match(item.pathname)) {
        return dispatch(changeTitle(item.title))
      }
    })
  }, [pathname])

  return { title }
}
