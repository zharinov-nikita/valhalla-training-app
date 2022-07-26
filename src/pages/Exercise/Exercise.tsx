import { FC } from 'react'
import Execution from './components/Execution/Execution'
import Hint from './components/Hint/Hint'
import Property from './components/Property/Property'
import style from './Exercise.module.scss'

const Exercise: FC = () => {
  return (
    <div className={style.exercise}>
      <Property
        props={{
          list: [
            { id: 1, title: 'Вид спорта', value: 'Бег' },
            { id: 2, title: 'Длительность (мин)', value: 90 },
            { id: 3, title: 'Интенсивность', value: 'Низкая' },
            { id: 4, title: 'Пульс (чсс)', value: '124 - 144' },
          ],
        }}
      />

      <Execution
        props={{
          text: 'Сверхдистанционая тренировка со скоростынми интервалами. Выполняйте длительный бег втечение 120 минут. Каждые 20 минут делайте ускорение в течение 20 секунд',
        }}
      />

      <Hint
        props={{
          text: 'После старта упражнения здесь начнут появляться подсказки',
        }}
      />
    </div>
  )
}

export default Exercise
