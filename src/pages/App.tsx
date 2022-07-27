import { FC, useEffect } from 'react'
import '../styles/index.scss'

import { Navigate, Route, Routes } from 'react-router-dom'
import { useAppSelector } from '../hooks/store/useAppSelector'

import Navigation from './Navigation/Navigation'
import Header from '../components/Header/Header'
import Profile from './Profile/Profile'

const App: FC = () => {
  const { theme } = useAppSelector((state) => state.app)
  const { isAuth } = useAppSelector((state) => state.user)

  useEffect(() => {
    if (theme === 'dark') {
      document
        .querySelector('meta[name=theme-color]')
        ?.setAttribute('content', '#1e1e1e')
    }
    if (theme === 'light') {
      document
        .querySelector('meta[name=theme-color]')
        ?.setAttribute('content', '#fff')
    }
  }, [theme])

  return (
    <div className="app" data-theme={theme}>
      <div className="container">
        <div className="wrapper">
          <Header />
          <Navigation />
          {isAuth ? (
            <Routes>
              <Route path="/user" element={'user'} />
              <Route path="/profile" element={<Profile />} />
              {/* <Route path="*" element={'404'} /> */}
            </Routes>
          ) : (
            <Routes>
              <Route path="/auth" element={'auth'} />
              <Route path="*" element={<Navigate to={'/auth'} replace />} />
            </Routes>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
