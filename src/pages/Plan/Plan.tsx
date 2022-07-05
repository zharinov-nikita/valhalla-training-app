import { FC } from 'react'
import Info from '../../components/Info/Info'
import { useFindQuery } from '../../redux/plan/plan.service'
import css from './Plan.module.scss'

const Plan: FC = () => {
  const { isError, isLoading, data } = useFindQuery('')

  return (
    <div className={css.list}>
      {data &&
        data.map((item) => (
          <Info
            props={{
              to: `/period/${item._id}`,
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
