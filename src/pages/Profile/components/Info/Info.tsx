import { FC } from 'react'
import Button from '../../../../components/Button/Button'
import style from './Info.module.scss'

export type InfoPropsType = {
  props: {
    name: string
    login: string
  }
}

const Info: FC<InfoPropsType> = ({ props }) => {
  return (
    <div className={style.info}>
      <div className={style.left}>
        <div className={style.icon}>{props.name.split('')[0]}</div>
        <div className={style.data}>
          <div className={style.name}>{props.name}</div>
          <div className={style.login}>{props.login}</div>
        </div>
      </div>
      <div className={style.right}>
        <Button
          props={{
            block: false,
            size: 'small',
            color: { type: 'transparent', value: 'purple' },
            border: 'solid',
            text: 'Обновить',
          }}
        />
      </div>
    </div>
  )
}

export default Info
