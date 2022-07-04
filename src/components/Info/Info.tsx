import { FC } from 'react'
import Status from '../Status/Status'
import css from './Info.module.scss'

const Info: FC = () => {
  return (
    <div className={css.info}>
      <div className={css.left}>
        <div className={css.icon}></div>
      </div>
      <div className={css.right}>
        <div className={css.header}>
          <div className={css.title}>Название</div>
          <Status props={{ text: 'Запланировано' }} />
        </div>
        <div className={css.body}>
          <div className={css.description}>
            Описание блока, очень много текста. Ляля тополя
          </div>
        </div>
        <div className={css.footer}>
          <div className={css.progress} data-progress={20}></div>
        </div>
      </div>
    </div>
  )
}

export default Info
