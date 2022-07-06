import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import AffixButton from '../../components/AffixButton/AffixButton'
import Info from '../../components/Info/Info'
import Property from '../../components/Property/Property'
import {
  useFindByIdAndUpdateMutation,
  useFindByIdQuery,
} from '../../redux/exercise/exercise.service'
import css from './Exercise.module.scss'

const Exercise: FC = () => {
  const { search } = useLocation()
  const { isError, isLoading, data } = useFindByIdQuery(search)
  const [update, {}] = useFindByIdAndUpdateMutation()

  return (
    <>
      {isLoading && 'Загрузка...'}
      {isError && 'Ошибка'}

      {data &&
        data.map((item) => (
          <div className={css.list} key={item._id}>
            <Info
              key={item._id}
              props={{
                title: item.title,
                description: item.description,
                status: item.status,
                progress: item.status === 'Завершено' ? 100 : 0,
                onClick: () =>
                  update({
                    ...item,
                    status:
                      item.status === 'Завершено' ? 'В работе' : 'Завершено',
                  }),
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
            <AffixButton
              props={{
                title: 'Завершить тренировку',
              }}
            />
          </div>
        ))}
    </>
  )
}

export default Exercise
