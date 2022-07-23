import { CloseOutlined, LeftOutlined, MenuOutlined } from '@ant-design/icons'
import { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { headerSlice } from '../../redux/header/header.slice'
import { navigationSlice } from '../../redux/navigation/navigation.slice'
import Button from '../Button/Button'
import style from './Header.module.scss'

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

const Header: FC = () => {
  const dispatch = useAppDispatch()
  const { title } = useAppSelector((state) => state.header)
  const { visible } = useAppSelector((state) => state.navigation)
  const { changeVisible } = navigationSlice.actions
  const { changeTitle } = headerSlice.actions

  const { pathname } = useLocation()

  useEffect(() => {
    data.forEach((item) => {
      if (pathname.match(item.pathname)) {
        return dispatch(changeTitle(item.title))
      }
    })
  }, [pathname])

  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.left}>
            <Button
              props={{
                text: <LeftOutlined />,
                size: 'medium',
                block: false,
              }}
            />
          </div>
          <div className={style.center}>{title}</div>
          <div className={style.right}>
            <Button
              props={{
                text: visible ? <CloseOutlined /> : <MenuOutlined />,
                size: 'medium',
                block: false,
              }}
              onClick={() => dispatch(changeVisible())}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
