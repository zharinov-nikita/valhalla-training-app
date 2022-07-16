import { AimOutlined } from '@ant-design/icons'
import { FC, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { menuSlice } from '../../redux/menu/menu.slice'
import css from './Menu.module.scss'

const Menu: FC = () => {
  const { pathname } = useLocation()
  const [click, setClick] = useState<number>(1)
  const dispatch = useAppDispatch()
  const { hide } = menuSlice.actions
  const { visible } = useAppSelector((state) => state.menu)

  useEffect(() => {
    if (click) {
      dispatch(hide())
    }
  }, [click])

  return (
    <div className={css.menu} data-visible={visible}>
      <div className={css.wrapper}>
        <div className={css.list}>
          <Link
            to={'/day/?cycleId=62d27db3e8abbafbac301b53'}
            onClick={() => setClick(Number(Date.now()))}
            className={css.item}
          >
            <div className={css.icon}>
              <AimOutlined />
            </div>
            <div className={css.text}>
              <span>Моя неделя</span>
              <span className={css.tag}>beta</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Menu
