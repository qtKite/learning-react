import useCounter from './useCounter'

function CustomCounter2() {
  const [count, increment, decrement, reset] = useCounter(-5, 5)

  return (
    <div>
      Counter: {count}
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>

    </div>
  )
}

export default CustomCounter2
