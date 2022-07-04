import { FC } from 'react'
import Info from '../../components/Info/Info'
import css from './Plan.module.scss'

const Plan: FC = () => {
  return (
    <div className={css.list}>
      <Info
        props={{
          to: '/period',
          title: 'Лыжная подготовка',
          description: 'План - подготовка к лыжному сезону 2022',
          status: 'В работе',
          progress: 30,
        }}
      />
    </div>
  )
}

export default Plan
