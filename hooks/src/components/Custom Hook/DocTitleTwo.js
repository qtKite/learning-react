import React, { useState, useEffect } from 'react'
import useDocumentTitle from './useDocumentTitle'
import TestHook from './TestHook'

function DocTitleTwo() {
  const [count, setCount] = useState(0)

  TestHook(count)

  return (
    <div>
      <button onClick={() => {
        setCount(count => count + 1)
      }}>Count - {count}</button>
    </div>
  )
}

export default DocTitleTwo
