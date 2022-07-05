import { FC } from 'react'
import Info, { InfoPropsType } from '../../components/Info/Info'
import { useFindQuery } from '../../redux/service'
import css from './Cycle.module.scss'

const Cycle: FC = () => {
  const { isError, isLoading, data } = useFindQuery('cycle')
  return (
    <div className={css.list}>
      {isLoading && 'Загрузка...'}
      {isError && 'Ошибка'}
      {data &&
        data.map((item) => (
          <Info
            key={item._id}
            props={{
              to: `/day/?periodId=${item._id}`,
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
