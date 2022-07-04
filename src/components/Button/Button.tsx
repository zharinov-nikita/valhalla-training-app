import { BugOutlined } from '@ant-design/icons'
import { FC } from 'react'
import css from './Button.module.scss'

const Button: FC = () => {
  return (
    <div className={css.button}>
      <div className={css.text}>Кнопка</div>
      <BugOutlined />
    </div>
  )
}

export default Button
