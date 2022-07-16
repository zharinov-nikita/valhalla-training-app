import { FC, useEffect } from 'react'
import { ArrowLeftOutlined, MenuOutlined } from '@ant-design/icons'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { headerSlice } from '../../redux/header/header.slice'
import { useLocation } from 'react-router-dom'
import css from './Header.module.scss'

const Header: FC = () => {
  const { pathname } = useLocation()
  const dispatch = useAppDispatch()
  const { updateTitle } = headerSlice.actions
  const { title } = useAppSelector((state) => state.header)
  const onClick = () => window.history.back()

  const data = [
    { title: 'План', pathname: /plan/ },
    { title: 'Период', pathname: /period/ },
    { title: 'Цикл', pathname: /cycle/ },
    { title: 'День', pathname: /day/ },
    { title: 'Тренировка', pathname: /workout/ },
    { title: 'Упражнение', pathname: /exercise/ },
  ]

  useEffect(() => {
    data.forEach((item) => {
      if (pathname.match(item.pathname)) {
        dispatch(updateTitle(item.title))
      }
    })
  }, [pathname])

  return (
    <div className={css.header}>
      <div className={css.wrapper}>
        <div className={css.left} onClick={onClick}>
          <ArrowLeftOutlined />
        </div>
        <div className={css.center}>{title}</div>
        <div className={css.right}>
          <MenuOutlined />
        </div>
      </div>
    </div>
  )
}

export default Header
