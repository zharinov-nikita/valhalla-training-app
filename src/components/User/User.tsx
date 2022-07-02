import { FieldTimeOutlined } from '@ant-design/icons'
import { FC } from 'react'
import css from './User.module.scss'

const User: FC = () => {
  return (
    <div className={css.item}>
      <div className={css.left}>
        <div className={css.icon}>Icon</div>
      </div>
      <div className={css.right}>
        <div className={css.header}>Header</div>
        <div className={css.body}>Body</div>
        <div className={css.footer}>
          <div className={css.info}>
            <span className={css.value}>1200</span>
            <FieldTimeOutlined className={css.min} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
