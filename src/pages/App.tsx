import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAppSelector } from '../hooks/useAppSelector'
import '../styles/index.scss'

const App: FC = () => {
  const { theme, positon } = useAppSelector((state) => state.app)
  const { isAuth } = useAppSelector((state) => state.user)

  return (
    <div className="app" data-theme={theme} data-positon={positon}>
      <div className="container">
        <div className="wrapper">
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
