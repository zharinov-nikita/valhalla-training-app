import { FC } from 'react'
import Tag from '../../../../components/Common/Tag/Tag'
import style from './Info.module.scss'

export type InfoPropsType = {
  firstname: string
  lastname?: string
  role: 'Спортсмен' | 'Тренер'
  login: string
}

const Info: FC<InfoPropsType> = ({ firstname, lastname, login, role }) => {
  return (
    <div className={style.info}>
      <div className={style.icon}>{firstname.split('')[0]}</div>
      <div className={style.data}>
        <div className={style.header}>
          <div className={style.left}>
            <span className={style.firstname}>{firstname}</span>
            {lastname && <span className={style.lastname}>{lastname}</span>}
          </div>
          <div className={style.right}>
            <Tag
              size="small"
              text={role}
              color={{ type: 'transparent', value: 'yellow' }}
            />
          </div>
        </div>
        <div className={style.body}>
          <span className={style.login}>{login}</span>
        </div>
      </div>
    </div>
  )
}

export default Info
