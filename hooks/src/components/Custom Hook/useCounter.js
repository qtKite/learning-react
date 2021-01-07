import { useState } from 'react'

function useCounter(initial, amount) {
  const [count, setCount] = useState(initial)

  const increment = () => {
    setCount(prevCount => prevCount + amount)
  }

  const decrement = () => {
    setCount(prevCount => prevCount - amount)
  }

  const reset = () => {
    setCount(initial)
  }

  return [count, increment, decrement, reset]
}

export default useCounter
