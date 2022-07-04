import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import Cycle from './pages/Cycle/Cycle'
import Day from './pages/Day/Day'
import Exercise from './pages/Exercise/Exercise'
import Period from './pages/Period/Period'
import Plan from './pages/Plan/Plan'
import Workout from './pages/Workout/Workout'

const App: FC = () => {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__wrapper">
          <Header props={{ title: 'План' }} />
          <Routes>
            <Route path="/plan" element={<Plan />} />
            <Route path="/period" element={<Period />} />
            <Route path="/cycle" element={<Cycle />} />
            <Route path="/day" element={<Day />} />
            <Route path="/workout" element={<Workout />} />
            <Route path="/exercise" element={<Exercise />} />
            <Route path="*" element={<Navigate to="/plan" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
