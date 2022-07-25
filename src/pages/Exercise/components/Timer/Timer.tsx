import { FC } from 'react'
import Button from '../../../../components/Button/Button'
import style from './Timer.module.scss'

const Timer: FC = () => {
  return (
    <div className={style.timer}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.time}>
            <div className={style.item}>
              <div className={style.value}>00</div>
              <div className={style.name}>Часы</div>
            </div>
            <div className={style.item}>
              <div className={style.value}>00</div>
              <div className={style.name}>минуты</div>
            </div>
            <div className={style.item}>
              <div className={style.value}>00</div>
              <div className={style.name}>секунды</div>
            </div>
          </div>
          <Button
            props={{
              block: true,
              color: { type: 'fill', value: 'purple' },
              text: 'Начать тренировку',
              size: 'medium',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Timer
