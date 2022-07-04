import { BugOutlined } from '@ant-design/icons'
import { FC } from 'react'
import Button from './components/Button/Button'
import Header from './components/Header/Header'
import Info from './components/Info/Info'
import Property from './components/Property/Property'
import Status from './components/Status/Status'

const App: FC = () => {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__wrapper">
          <Header props={{ title: 'План' }} />
          <Status props={{ text: 'Запланировано' }} />
          <Button props={{ text: 'Кнопка', icon: <BugOutlined /> }} />
          <Property props={{ name: 'Интенсивность', value: 'Низкая' }} />
          <Property props={{ name: 'Длительность', value: '120 минут' }} />
          <Info
            props={{
              title: 'Лыжная подготовка',
              description: 'План - подготовка к лыжному сезону 2021/2022',
              status: 'В работе',
              progress: 10,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default App
