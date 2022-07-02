import { FieldTimeOutlined } from '@ant-design/icons'
import { FC } from 'react'
import css from './User.module.scss'

export type UserPropsType = {
  option: {
    info: string
    value: number
  }
}

const User: FC<UserPropsType> = ({ option }) => {
  return (
    <div className={css.item}>
      <div className={css.left}>
        <div className={css.icon}>Icon</div>
      </div>
      <div className={css.right}>
        <div className={css.header}>Аккаунт</div>
        <div className={css.body}>{option.info}</div>
        <div className={css.footer}>
          <div className={css.info}>
            <span className={css.value}>{option.value}</span>
            <FieldTimeOutlined className={css.min} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
