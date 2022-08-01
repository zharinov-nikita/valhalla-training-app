import { FC, useEffect } from 'react'
import '../styles/index.scss'

import { Navigate, Route, Routes } from 'react-router-dom'
import { useAppSelector } from '../hooks/store/useAppSelector'

import Navigation from './Navigation/Navigation'
import Header from '../components/Header/Header'
import User from './User/User'
import Registration from './Registration/Registration'
import Authorization from './Authorization/Authorization'
import { useAppDispatch } from '../hooks/store/useAppDispatch'
import { userSlice, UserStateType } from '../redux/user/user.slice'

const App: FC = () => {
  const dispatch = useAppDispatch()
  const { updateCurrentUser, update } = userSlice.actions
  const { theme } = useAppSelector((state) => state.app)
  const { isAuth } = useAppSelector((state) => state.user)

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      const currentUser: UserStateType['currentUser'] = JSON.parse(
        localStorage.getItem('currentUser') || ''
      )
      dispatch(updateCurrentUser(currentUser))
      dispatch(update(currentUser))
    }
  }, [])

  return (
    <div className="app" data-theme={theme}>
      <div className="container">
        <div className="wrapper">
          {isAuth && (
            <>
              <Header />
              <Navigation />
            </>
          )}
          {isAuth ? (
            <Routes>
              <Route path="/user" element={<User />} />
              <Route path="/main" element={'main'} />
              <Route path="*" element={<Navigate to={'/user'} replace />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/registration" element={<Registration />} />
              <Route path="/authorization" element={<Authorization />} />
              <Route
                path="*"
                element={<Navigate to={'/registration'} replace />}
              />
            </Routes>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
