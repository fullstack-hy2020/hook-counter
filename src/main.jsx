import ReactDOM from 'react-dom/client'
import { CounterContextProvider } from './CounterContext'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CounterContextProvider>
    <App />
  </CounterContextProvider>
)
