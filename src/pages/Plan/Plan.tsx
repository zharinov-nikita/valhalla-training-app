import { FC } from 'react'
import Info from '../../components/Info/Info'
import css from './Plan.module.scss'

const Plan: FC = () => {
  return (
    <Info
      props={{
        to: '/period',
        title: 'Лыжная подготовка',
        description: 'План - подготовка к лыжному сезону 2021/2022',
        status: 'В работе',
        progress: 10,
      }}
    />
  )
}

export default Plan
