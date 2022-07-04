import { FC } from 'react'
import Header from './components/Header/Header'
import Status from './components/Status/Status'

const App: FC = () => {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__wrapper">
          <Header props={{ title: 'План' }} />
          <Status />
        </div>
      </div>
    </div>
  )
}

export default App
