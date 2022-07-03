import {
  FieldTimeOutlined,
  HeartFilled,
  HeartOutlined,
} from '@ant-design/icons'
import { FC } from 'react'
import Tag from '../Tag/Tag'
import css from './Workout.module.scss'

const Workout: FC = () => {
  return (
    <div className={css.workout}>
      <div className={css.header}>
        <div className={css.title}>Дистанционная тренировка</div>
      </div>
      <div className={css.body}>
        <Tag option={{ value: 80, icon: <FieldTimeOutlined /> }} />
        <Tag option={{ value: 'Интенсивная', icon: <HeartFilled /> }} />
      </div>
    </div>
  )
}

export default Workout
