import { FC } from 'react'
import Info, { InfoPropsType } from '../../components/Info/Info'
import { useFindQuery } from '../../redux/service'
import css from './Day.module.scss'

const Day: FC = () => {
  const { isError, isLoading, data } = useFindQuery('day')
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
