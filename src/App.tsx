import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Day from './pages/Day/Day'
import Exercise from './pages/Exercise/Exercise'

const App: FC = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <Routes>
            <Route path="day" element={<Day />} />
            <Route path="exercise/:_id" element={<Exercise />} />
            <Route path="*" element={<Navigate to="/day" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
