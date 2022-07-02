import React from 'react'
import Progress from './components/Progress/Progress'
import Pulse from './components/Pulse/Pulse'
import User from './components/User/User'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div
          className="wrapper"
          style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
        >
          <User />
          <Pulse />
          <Progress />
        </div>
      </div>
    </div>
  )
}

export default App
