import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import Info from '../../components/Info/Info'
import { useCycleQuery } from '../../redux/service'
import css from './Cycle.module.scss'

const Cycle: FC = () => {
  const { search } = useLocation()
  const { isError, isLoading, data } = useCycleQuery(search)
  return (
    <div className={css.list}>
      {isLoading && 'Загрузка...'}
      {isError && 'Ошибка'}
      {data &&
        data.map((item) => (
          <Info
            key={item._id}
            props={{
              to: `/day/?cycleId=${item._id}`,
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

export default Cycle
