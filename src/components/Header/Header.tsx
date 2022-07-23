import { LeftOutlined, MenuOutlined } from '@ant-design/icons'
import { FC } from 'react'
import Button from '../Button/Button'
import style from './Header.module.scss'

const Header: FC = () => {
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
            {' '}
            <Button
              props={{
                text: <MenuOutlined />,
                size: 'medium',
                block: false,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
