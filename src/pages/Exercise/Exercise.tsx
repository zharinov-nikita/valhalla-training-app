import { FC } from 'react'
import style from './Exercise.module.scss'
import Approach from './components/Approach/Approach'

const Exercise: FC = () => {
  return (
    <div className={style.exercise}>
      <Approach />
    </div>
  )
}

export default Exercise
