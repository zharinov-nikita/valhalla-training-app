import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navigation from './Navigation/Navigation'
import Header from '../components/Header/Header'
import { useAppSelector } from '../hooks/store/useAppSelector'
import '../styles/index.scss'

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
              <Route path="*" element={'404'} />
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
