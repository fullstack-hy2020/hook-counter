import { useReducer } from 'react'
import CounterContext from './CounterContext'
import Display from './components/Display'
import Button from './components/Button'

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INC":
        return state + 1
    case "DEC":
        return state - 1
    case "ZERO":
        return 0
    default:
        return state
  }
}

const App = () => {
  const [counter, counterDispatch] = useReducer(counterReducer, 0)

  return (
    <CounterContext.Provider value={[counter, counterDispatch]}>
      <Display />
      <div>
        <Button label="+" type="INC" />
        <Button label="-" type="DEC" />
        <Button label="0" type="ZERO" />
      </div>
    </CounterContext.Provider>
  )
}

export default App