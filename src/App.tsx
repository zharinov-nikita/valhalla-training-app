import { FC } from 'react'
import Header from './components/Header/Header'

const App: FC = () => {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__wrapper">
          <Header props={{ title: 'План' }} />
        </div>
      </div>
    </div>
  )
}

export default App
