import { FC, useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'

import Plan from './pages/Plan/Plan'
import Period from './pages/Period/Period'

const App: FC = () => {
  const [title, setTitle] = useState('План')
  const headerTitles = [
    { title: 'План', pathname: /plan/ },
    { title: 'Период', pathname: /period/ },
    { title: 'Цикл', pathname: /cycle/ },
    { title: 'День', pathname: /day/ },
    { title: 'Тренировка', pathname: /workout/ },
    { title: 'Упражнение', pathname: /exercise/ },
  ]
  const { pathname } = useLocation()

  useEffect(() => {
    headerTitles.forEach((item) => {
      if (pathname.match(item.pathname)) {
        setTitle(item.title)
      }
    })
  }, [pathname])

  return (
    <div className="app">
      <div className="app__container">
        <Header props={{ title }} />
        <div className="app__wrapper">
          <Routes>
            <Route path="/plan" element={<Plan />} />
            <Route path="/period" element={<Period />} />
            <Route path="*" element={<Navigate to="/plan" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
