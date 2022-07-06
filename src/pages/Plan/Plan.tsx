import { FC } from 'react'
import AffixButton from '../../components/AffixButton/AffixButton'
import Info from '../../components/Info/Info'
import {
  useFindQuery,
  useFindByIdAndUpdateMutation,
} from '../../redux/plan/plan.service'
import css from './Plan.module.scss'

const Plan: FC = () => {
  const { isError, isLoading, data } = useFindQuery('')
  const [update, {}] = useFindByIdAndUpdateMutation()

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
              progress: item.status === 'Завершено' ? 100 : 0,
              onClick: () =>
                update({
                  ...item,
                  status:
                    item.status === 'Завершено' ? 'В работе' : 'Завершено',
                }),
            }}
          />
        ))}
      <AffixButton props={{ title: 'Добавить план' }} />
    </div>
  )
}

export default Plan
