import { FC } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { appSlice } from '../../redux/app/app.slice'

const Login: FC = () => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.app)
  const { updateUser } = appSlice.actions
  return (
    <div>
      <button
        onClick={() => {
          localStorage.setItem('login', 'zharinov')
          localStorage.setItem('password', 'password')
          dispatch(
            updateUser({ ...user, login: 'zharinov', password: 'password' })
          )
          window.location.replace('/user')
        }}
      >
        Login
      </button>
    </div>
  )
}

export default Login
