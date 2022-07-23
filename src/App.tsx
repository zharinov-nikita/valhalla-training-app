import { FC } from 'react'
import { useAppDispatch } from './hooks/useAppDispatch'
import { useAppSelector } from './hooks/useAppSelector'
import { appSlice } from './redux/app/app.slice'
import './styles/index.scss'

const App: FC = () => {
  const { theme, positon } = useAppSelector((state) => state.app)
  return (
    <div className="app" data-theme={theme} data-positon={positon}>
      <div className="container">
        <div className="wrapper">{theme}</div>
      </div>
    </div>
  )
}

export default App
