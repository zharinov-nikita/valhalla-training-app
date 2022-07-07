import { FC } from 'react'
import AffixButton from '../../components/AffixButton/AffixButton'
import Info from '../../components/Info/Info'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { drawerSlice } from '../../redux/drawer/drawer.slice'
import {
  useFindQuery,
  useFindByIdAndUpdateMutation,
} from '../../redux/plan/plan.service'
import css from './Plan.module.scss'
import PlanDrawer from './PlanDrawer/PlanDrawer'

const Plan: FC = () => {
  const { isError, isLoading, data } = useFindQuery('')
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
              to: `/period/?planId=${item._id}`,
              title: item.title,
              description: item.description,
              status: item.status,
              progress: item.status === 'Завершено' ? 100 : 0,
              onClickStatus: () =>
                update({
                  ...item,
                  status:
                    item.status === 'Завершено' ? 'В работе' : 'Завершено',
                }),
              onClickButton: () => dispatch(show()),
            }}
          />
        ))}
      <AffixButton
        props={{ title: 'Добавить план', onClick: () => dispatch(show()) }}
      />
      <PlanDrawer />
    </div>
  )
}

export default Plan
