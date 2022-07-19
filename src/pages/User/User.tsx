import React, { FC } from 'react'
import css from './User.module.scss'
import { Link } from 'react-router-dom'
import { useFindQuery } from '../../redux/user/user.service'
import Empty from '../../components/Empty/Empty'
import Loader from '../../components/Loader/Loader'

const User: FC = () => {
  const pollingInterval = Number(process.env['REACT_APP_POLLING_INTERVAL'])
  const { isError, isLoading, data } = useFindQuery('', { pollingInterval })

  if (isLoading) {
    return <Empty children={<Loader />} />
  }

  if (isError) {
    return <Empty children={'Произошла ошибка'} />
  }

  if (data && data.length === 0) {
    return <Empty children={'Упс 🌱'} />
  }

  return (
    <div className={css.user}>
      {data &&
        data.map((item) => (
          <React.Fragment key={item._id}>
            <div className={css.info}>
              <div className={css.header}>
                <div className={css.left}>
                  <div className={css.icon}>{item.name.split('')[0]}</div>
                  <div className={css.data}>
                    <div className={css.top}>{item.name}</div>
                    <div className={css.buttom}>{item.login}</div>
                  </div>
                </div>
                <div className={css.left}>
                  <Link to={''} className={css.link}>
                    Моя неделя
                  </Link>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
    </div>
  )
}

export default User
