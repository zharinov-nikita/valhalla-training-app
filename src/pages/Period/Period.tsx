import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import AffixButton from '../../components/AffixButton/AffixButton'
import Info from '../../components/Info/Info'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { drawerSlice } from '../../redux/drawer/drawer.slice'
import {
  useFindByIdAndUpdateMutation,
  useFindByIdQuery,
} from '../../redux/period/period.service'
import css from './Period.module.scss'
import PeriodDrawer from './PeriodDrawer/PeriodDrawer'

const Period: FC = () => {
  const { search } = useLocation()
  const { isError, isLoading, data } = useFindByIdQuery(search)
  const [update, {}] = useFindByIdAndUpdateMutation()
  const dispatch = useAppDispatch()
  const { show } = drawerSlice.actions
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
      <AffixButton
        props={{ title: 'Добавить период', onClick: () => dispatch(show()) }}
      />
      <PeriodDrawer />
    </div>
  )
}

export default Period
