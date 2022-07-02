import { FC } from 'react'
import List from './List/List'
import css from './Progress.module.scss'

const Progress: FC = () => {
  return (
    <div className={css.item}>
      <div className={css.title}>Прогресс</div>
      <List />
    </div>
  )
}

export default Progress
