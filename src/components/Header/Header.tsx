import { CloseOutlined, LeftOutlined, MenuOutlined } from '@ant-design/icons'
import { FC } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { navigationSlice } from '../../redux/navigation/navigation.slice'
import Button from '../Button/Button'
import style from './Header.module.scss'

const Header: FC = () => {
  const { visible } = useAppSelector((state) => state.navigation)
  const dispatch = useAppDispatch()
  const { changeVisibleNavigation } = navigationSlice.actions
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
          <div className={style.center}>Страница</div>
          <div className={style.right}>
            <Button
              props={{
                text: visible ? <CloseOutlined /> : <MenuOutlined />,
                size: 'medium',
                block: false,
              }}
              onClick={() => dispatch(changeVisibleNavigation())}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
