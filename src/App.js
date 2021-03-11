// import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "./actions"

function App() {
  const counter = useSelector((state) => state.counterReducer)
  const isLogged = useSelector((state) => state.isLoggedReducer)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>
        Counter: {counter}
        {isLogged ? <h1>yes is Logged</h1> : <h1>is not Logged </h1>}
        <button
          onClick={() => {
            dispatch(increment(10))
          }}
        >
          (+)
        </button>
        <button
          onClick={() => {
            dispatch(decrement(5))
          }}
        >
          (-)
        </button>
      </h1>
    </div>
  )
}

export default App
