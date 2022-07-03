import { ExclamationCircleOutlined, FieldTimeOutlined } from '@ant-design/icons'
import { FC } from 'react'
import css from './Exercise.module.scss'

const Exercise: FC = () => {
  return (
    <div className={css.list}>
      {[
        { id: 1, value: 'Подтягивания' },
        { id: 2, value: 'Отжимания' },
        { id: 3, value: 'Пружина' },
      ].map((item) => (
        <div className={css.item}>
          <div className={css.body}>
            <div className={css.left}>{item.id}</div>
            <div className={css.right}>
              <div className={css.header}>
                <div className={css.info}>
                  <div className={css.title}>{item.value}</div>
                  <div className={css.description}>
                    Подтягивания - хват обычный, дальше какой-то текст.
                  </div>
                </div>
                <div className={css.btn}>
                  <span>Завершить</span>
                  <span>
                    <ExclamationCircleOutlined />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={css.footer}>
            <div className={css.tag}>
              <span>Количество: 16</span>
              <span>
                <FieldTimeOutlined />
              </span>
            </div>
            <div className={css.tag}>
              <span>Подход: 1</span>
              <span>
                <FieldTimeOutlined />
              </span>
            </div>
            <div className={css.tag}>
              <span>Отыдых: 60</span>
              <span>
                <FieldTimeOutlined />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Exercise
