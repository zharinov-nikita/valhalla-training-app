import { FC } from 'react'
import { useTitle } from './hooks/useTitle'
import { useVisible } from './hooks/useVisible'
import Button from '../Button/Button'
import style from './Header.module.scss'
import { CloseOutlined, LeftOutlined, MenuOutlined } from '@ant-design/icons'

const Header: FC = () => {
  const { title } = useTitle()
  const { visible, actionChangeVisible } = useVisible()

  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.left}>
            <Button text={<LeftOutlined />} size={'medium'} onClick={() => window.history.back()} />
          </div>
          <div className={style.center}>{title}</div>
          <div className={style.right}>
            <Button
              text={visible ? <CloseOutlined /> : <MenuOutlined />}
              size={'medium'}
              onClick={actionChangeVisible}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
