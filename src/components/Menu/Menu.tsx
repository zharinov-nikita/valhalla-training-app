import { AimOutlined } from '@ant-design/icons'
import { FC } from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'
import css from './Menu.module.scss'

const Menu: FC = () => {
  const { visible } = useAppSelector((state) => state.menu)
  return (
    <div className={css.menu} data-visible={visible}>
      <div className={css.wrapper}>
        <div className={css.list}>
          <div className={css.item}>
            <div className={css.icon}>
              <AimOutlined />
            </div>
            <div className={css.text}>Hello world</div>
          </div>
          <div className={css.item}>
            <div className={css.icon}>
              <AimOutlined />
            </div>
            <div className={css.text}>Hello world</div>
          </div>
          <div className={css.item}>
            <div className={css.icon}>
              <AimOutlined />
            </div>
            <div className={css.text}>Hello world</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
