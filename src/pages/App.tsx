import { FC } from 'react'
import '../styles/index.scss'

import { Navigate, Route, Routes } from 'react-router-dom'
import { useAppSelector } from '../hooks/store/useAppSelector'

import Navigation from './Navigation/Navigation'
import Header from '../components/Header/Header'
import Plan from './Plan/Plan'

const App: FC = () => {
  const { theme } = useAppSelector((state) => state.app)
  const { isAuth } = useAppSelector((state) => state.user)

  return (
    <div className="app" data-theme={theme}>
      <div className="container">
        <div className="wrapper">
          <Header />
          <Navigation />
          {isAuth ? (
            <Routes>
              <Route path="/user" element={'user'} />
              <Route path="/plan" element={<Plan />} />
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
