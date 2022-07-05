import { FC } from 'react'
import Info from '../../components/Info/Info'
import { usePlanQuery } from '../../redux/service'
import css from './Plan.module.scss'

const Plan: FC = () => {
  const { isError, isLoading, data } = usePlanQuery('')

  return (
    <div className={css.list}>
      {isLoading && 'Загрузка...'}
      {isError && 'Ошибка'}
      {data &&
        data.map((item) => (
          <Info
            key={item._id}
            props={{
              to: `/period/?planId=${item._id}`,
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

export default Plan
