import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import Info from '../../components/Info/Info'
import { usePeriodQuery } from '../../redux/service'
import css from './Period.module.scss'

const Period: FC = () => {
  const { search } = useLocation()
  const { isError, isLoading, data } = usePeriodQuery(search)
  return (
    <div className={css.list}>
      {isLoading && 'Загрузка...'}
      {isError && 'Ошибка'}
      {data &&
        data.map((item) => (
          <Info
            key={item._id}
            props={{
              to: `/cycle/?periodId=${item._id}`,
              title: item.title,
              description: item.description,
              status: item.status,
              progress: 30,
            }}
          />
        ))}
    </div>
  )
}

export default Period
