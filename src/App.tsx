import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Plan from './pages/Plan/Plan'

const App: FC = () => {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__wrapper">
          <Header props={{ title: 'План' }} />
          <Routes>
            <Route path="/plan" element={<Plan />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
