import React from 'react'
import Progress from './components/Progress/Progress'
import Pulse from './components/Pulse/Pulse'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div
          className="wrapper"
          style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
        >
          <Pulse />
          <Progress />
        </div>
      </div>
    </div>
  )
}

export default App
