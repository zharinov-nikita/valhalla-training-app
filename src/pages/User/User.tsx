import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useFindQuery } from '../../redux/user/user.service'

const User: FC = () => {
  const pollingInterval = Number(process.env['REACT_APP_POLLING_INTERVAL'])
  const { isError, isLoading, data } = useFindQuery('', { pollingInterval })
  return (
    <div>
      <div></div>
      {data &&
        data.map((item) => (
          <Link key={item._id} to={`/plan/?userId=${item._id}`}>
            План
          </Link>
        ))}
    </div>
  )
}

export default User
