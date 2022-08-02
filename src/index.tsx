import ReactDOM from 'react-dom/client'
import App from './pages/App'
import { BrowserRouter } from 'react-router-dom'
import { setupStore } from './redux/store'
import { Provider } from 'react-redux'

export const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
