import { FC } from 'react'
import AffixButton from '../../components/AffixButton/AffixButton'
import Property from '../../components/Property/Property'
import { usePropertyQuery } from '../../redux/service'
import css from './Exercise.module.scss'

const Exercise: FC = () => {
  const { isError, isLoading, data } = usePropertyQuery('property')
  console.log(data)

  return (
    <div className={css.list}>
      {isLoading && 'Загрузка...'}
      {isError && 'Ошибка'}
      {data &&
        data.map((item) => (
          <div className={css.property}>
            <Property props={{ name: item.name, value: item.value }} />
          </div>
        ))}

      <AffixButton props={{ title: 'Завершить тренировку' }} />
    </div>
  )
}

export default Exercise
