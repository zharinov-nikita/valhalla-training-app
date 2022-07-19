import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAppSelector } from './hooks/useAppSelector'
import './scss/index.scss'

import Header from './components/Header/Header'
import Plan from './pages/Plan/Plan'
import Period from './pages/Period/Period'
import Cycle from './pages/Cycle/Cycle'
import Day from './pages/Day/Day'
import Workout from './pages/Workout/Workout'
import Exercise from './pages/Exercise/Exercise'
import Menu from './components/Menu/Menu'
import Modal from './components/Modal/Modal'
import User from './pages/User/User'
import Login from './pages/Login/Login'

const App: FC = () => {
  const { fixed } = useAppSelector((state) => state.app)
  return (
    <div className="app" data-theme={'dark'} data-fixed={fixed}>
      <div className="app__container">
        <Header />
        <Menu />
        <Modal />
        <div className="app__wrapper">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<User />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/period" element={<Period />} />
            <Route path="/cycle" element={<Cycle />} />
            <Route path="/day" element={<Day />} />
            <Route path="/workout" element={<Workout />} />
            <Route path="/exercise" element={<Exercise />} />
            <Route path="*" element={<Navigate to="/user" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
