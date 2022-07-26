import { FC } from 'react'
import '../styles/index.scss'

import { AppstoreOutlined } from '@ant-design/icons'

import { Navigate, Route, Routes } from 'react-router-dom'
import { useAppSelector } from '../hooks/store/useAppSelector'

import Navigation from './Navigation/Navigation'
import Header from '../components/Header/Header'
import Setting from './Setting/Setting'
import Profile from './Profile/Profile'
import Exercise from './Exercise/Exercise'
import Card from '../components/Card/Card'
import Icon from '../components/Icon/Icon'
import List from '../components/Card/List/List'
import Message from '../components/Card/Message/Message'

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
              <Route path="/setting" element={<Setting />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/exercise" element={<Exercise />} />
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
