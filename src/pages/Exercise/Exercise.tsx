import { FC } from 'react'
import style from './Exercise.module.scss'
import Approach from './components/Approach/Approach'

const Exercise: FC = () => {
  return (
    <div className={style.exercise}>
      <Approach
        props={{
          box: {
            title: 'Подтягивания',
            list: [
              {
                id: 1,
                completed: false,
                list: [
                  { id: 1, title: 'Количество (раз)', value: '17' },
                  { id: 2, title: 'Отдых (сек)', value: '120' },
                ],
              },
              {
                id: 2,
                completed: false,
                list: [
                  { id: 1, title: 'Количество (раз)', value: '17' },
                  { id: 2, title: 'Отдых (сек)', value: '120' },
                ],
              },
              {
                id: 3,
                completed: false,
                list: [
                  { id: 1, title: 'Количество (раз)', value: '17' },
                  { id: 2, title: 'Отдых (сек)', value: '120' },
                ],
              },
            ],
          },
        }}
      />
    </div>
  )
}

export default Exercise
