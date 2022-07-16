import { AimOutlined } from '@ant-design/icons'
import { FC } from 'react'
import css from './Menu.module.scss'

const Menu: FC = () => {
  return (
    <div className={css.menu} data-visible={false}>
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
