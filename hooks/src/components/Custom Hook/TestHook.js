import React from 'react'

function TestHook(count) {
  React.useEffect(() => {
    document.title = `Count ${count}`
  }, [count])

}

export default TestHook
