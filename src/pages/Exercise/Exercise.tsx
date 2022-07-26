import { FC } from 'react'
import style from './Exercise.module.scss'

import Property from './components/Property/Property'

const Exercise: FC = () => {
  return (
    <div className={style.exercise}>
      <Property />
    </div>
  )
}

export default Exercise
