import { FC } from 'react'
import Button from './Button/Button'
import Item from './Item/Item'
import css from './Exercise.module.scss'

const Exercise: FC = () => {
  return (
    <div className={css.exercise}>
      <Item />
      <Button />
    </div>
  )
}

export default Exercise
