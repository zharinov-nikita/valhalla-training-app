import { FC } from 'react'
import Tag from '../../Common/Tag/Tag'
import style from './Info.module.scss'

const Info: FC = () => {
  return (
    <div className={style.info}>
      <div className={style.icon}>Д</div>
      <div className={style.data}>
        <div className={style.header}>
          <div className={style.left}>
            <span className={style.firstname}>Данил</span>
            <span className={style.lastname}>Жаринов</span>
          </div>
          <div className={style.right}>
            <Tag
              size="small"
              text="Спортсмен"
              color={{ type: 'transparent', value: 'yellow' }}
            />
          </div>
        </div>
        <div className={style.body}>
          <span className={style.login}>zharinov_danil</span>
        </div>
      </div>
    </div>
  )
}

export default Info
