import { FC } from 'react'
import css from './Header.module.scss'
import { ArrowLeftOutlined } from '@ant-design/icons'

export type HeaderPropsType = {
  props: {
    title: string
  }
}

const Header: FC<HeaderPropsType> = ({ props }) => {
  const onClick = () => window.history.back()
  return (
    <div className={css.header}>
      <div className={css.wrapper}>
        <div className={css.left} onClick={onClick}>
          <ArrowLeftOutlined />
        </div>
        <div className={css.center}>{props.title}</div>
        <div className={css.right}></div>
      </div>
    </div>
  )
}

export default Header
