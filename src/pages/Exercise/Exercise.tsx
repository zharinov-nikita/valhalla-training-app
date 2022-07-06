import { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AffixButton from '../../components/AffixButton/AffixButton'
import Info from '../../components/Info/Info'
import Property from '../../components/Property/Property'
import { useFindByIdAndUpdateMutation } from '../../redux/exercise/exercise.service'
import { useExerciseQuery } from '../../redux/service'
import css from './Exercise.module.scss'

const Exercise: FC = () => {
  const { search } = useLocation()
  const { isError, isLoading, data } = useExerciseQuery(search)
  const [
    update,
    {
      isError: isErrorUpdate,
      isSuccess: isSuccessUpdate,
      isLoading: isLoadingUpdate,
    },
  ] = useFindByIdAndUpdateMutation()

  return (
    <div className={css.list}>
      {isLoading && 'Загрузка...'}
      {isError && 'Ошибка'}

      {data &&
        data.map((item) => (
          <div key={item._id}>
            <button
              onClick={() => update({ ...item, status: String(Date.now()) })}
            >
              fsad
            </button>
            <Info
              props={{
                title: item.title,
                description: item.description,
                status: item.status,
                progress: 30,
              }}
            />
            <div className={css.property}>
              {item.option.map((propterty) => (
                <Property
                  key={propterty.title}
                  props={{
                    name: propterty.title,
                    value: propterty.value,
                  }}
                />
              ))}
            </div>
          </div>
        ))}

      <AffixButton props={{ title: 'Завершить тренировку' }} />
    </div>
  )
}

export default Exercise
