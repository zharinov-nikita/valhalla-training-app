import { FC } from 'react'
import css from './Header.module.scss'
import { ArrowLeftOutlined } from '@ant-design/icons'

const Header: FC = () => {
  return (
    <div className={css.header}>
      <div className={css.wrapper}>
        <div className={css.left}>
          <ArrowLeftOutlined />
        </div>
        <div className={css.center}>Страница</div>
        <div className={css.right}></div>
      </div>
    </div>
  )
}

export default Header
