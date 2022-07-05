import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import Info from '../../components/Info/Info'
import { useDayQuery } from '../../redux/service'
import css from './Day.module.scss'

const Day: FC = () => {
  const { search } = useLocation()
  const { isError, isLoading, data } = useDayQuery(search)
  return (
    <div className={css.list}>
      {isLoading && 'Загрузка...'}
      {isError && 'Ошибка'}
      {data &&
        data.map((item) => (
          <Info
            key={item._id}
            props={{
              to: `/workout/?dayId=${item._id}`,
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

export default Day
