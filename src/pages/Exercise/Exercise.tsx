import { FC } from 'react'
import AffixButton from '../../components/AffixButton/AffixButton'
import Info from '../../components/Info/Info'
import Property from '../../components/Property/Property'
import css from './Exercise.module.scss'

const Exercise: FC = () => {
  return (
    <div className={css.list}>
      <Info
        props={{
          to: '/exercise',
          title: 'Дистанция',
          description:
            'Тренировки на выносливость или аэробные тренировки совершенствуют различные системы организма - повышают способность организма потреблять кислород (повышают МПК), увеличивают размер и количество митохондрий в клетках мышц (митохондрии - маленькие электростанции внутри клеток), повышают плотность капилляров, увеличивают активность ферментов',
          status: 'Завершено',
          progress: 0,
        }}
      />
      <div className={css.property}>
        <Property props={{ name: 'Длительность', value: '120 минут' }} />
        <Property props={{ name: 'Интенсивность', value: 'Низкая' }} />
      </div>
      <AffixButton props={{ title: 'Завершить тренировку' }} />
    </div>
  )
}

export default Exercise
