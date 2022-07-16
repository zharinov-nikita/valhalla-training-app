import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import Plan from './pages/Plan/Plan'
import Period from './pages/Period/Period'
import Cycle from './pages/Cycle/Cycle'
import Day from './pages/Day/Day'
import Workout from './pages/Workout/Workout'
import Exercise from './pages/Exercise/Exercise'
import Approach from './components/Approach/Approach'

const App: FC = () => {
  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <div className="app__wrapper">
          <Approach
            props={[
              {
                id: '1',
                comleted: true,
                quantity: 16.5,
                rest: 20,
              },
              {
                id: '2',
                comleted: false,
                quantity: 14,
                rest: 20,
              },
              {
                id: '3',
                comleted: false,
                quantity: 18,
                rest: 20,
              },
              {
                id: '4',
                comleted: false,
                quantity: 18,
                rest: 20,
              },
              {
                id: '5',
                comleted: false,
                quantity: 14,
                rest: 20,
              },
              {
                id: '6',
                comleted: false,
                quantity: 18,
                rest: 20,
              },
              {
                id: '7',
                comleted: false,
                quantity: 18,
                rest: 20,
              },
            ]}
          />
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
