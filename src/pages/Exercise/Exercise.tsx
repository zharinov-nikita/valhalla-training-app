import { FC } from 'react'
import style from './Exercise.module.scss'
import Property from './components/Property/Property'
import Execution from './components/Execution/Execution'
import Hint from './components/Hint/Hint'

const Exercise: FC = () => {
  return (
    <div className={style.exercise}>
      <Property />
      <Execution />
      <Hint />
    </div>
  )
}

export default Exercise
