import { FC } from 'react'
import List from './List/List'
import css from './Pulse.module.scss'

const Pulse: FC = () => {
  return (
    <div className={css.item}>
      <div className={css.title}>Пульсовые зоны</div>
      <List />
    </div>
  )
}

export default Pulse
