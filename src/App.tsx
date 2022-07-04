import { BugOutlined } from '@ant-design/icons'
import { FC } from 'react'
import Button from './components/Button/Button'
import Header from './components/Header/Header'
import Status from './components/Status/Status'

const App: FC = () => {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__wrapper">
          <Header props={{ title: 'План' }} />
          <Status props={{ text: 'Запланировано' }} />
          <Button props={{ text: 'Кнопка', icon: <BugOutlined /> }} />
        </div>
      </div>
    </div>
  )
}

export default App
