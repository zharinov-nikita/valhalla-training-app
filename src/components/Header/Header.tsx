import { CloseOutlined, LeftOutlined, MenuOutlined } from '@ant-design/icons'
import { FC } from 'react'
import { useTitle } from './hooks/useTitle'
import Button from '../Button/Button'
import style from './Header.module.scss'
import { useVisible } from './hooks/useVisible'

const Header: FC = () => {
  const { title } = useTitle()
  const { visible, actionChangeVisible } = useVisible()

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
              onClick={() => window.history.back()}
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
              onClick={actionChangeVisible}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
