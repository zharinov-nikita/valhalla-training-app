import { FC } from 'react'
import Info from '../../components/Info/Info'
import { useFindQuery } from '../../redux/service'
import css from './Plan.module.scss'

const Plan: FC = () => {
  const { isError, isLoading, data } = useFindQuery('plan')

  return (
    <div className={css.list}>
      {isLoading && 'Загрузка...'}
      {data &&
        data.map((item) => (
          <Info
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
