import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useFindQuery } from '../../redux/user/user.service'

const User: FC = () => {
  const pollingInterval = Number(process.env['REACT_APP_POLLING_INTERVAL'])
  const { isError, isLoading, data } = useFindQuery('', { pollingInterval })
  return (
    <div>
      <div></div>
      {data &&
        data.map((item) => (
          <React.Fragment key={item._id}>
            <div>Привет, {item.name}</div>
            <Link to={`/plan/?userId=${item._id}`}>План</Link>
          </React.Fragment>
        ))}
    </div>
  )
}

export default User
