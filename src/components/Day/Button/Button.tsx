import { FC } from 'react'
import css from './Button.module.scss'

const Button: FC = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div className={css.button}>Завершить тренировку</div>
      </div>
    </div>
  )
}

export default Button
