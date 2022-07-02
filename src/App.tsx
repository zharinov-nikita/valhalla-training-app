import React from 'react'
import Menu from './components/Menu/Menu'
import Progress from './components/Progress/Progress'
import Pulse from './components/Pulse/Pulse'
import User from './components/User/User'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <Menu />
          <User option={{ info: 'Жаринов Данил', value: 1200 }} />
          <Progress />
          <Pulse />
        </div>
      </div>
    </div>
  )
}

export default App
