import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
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
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
