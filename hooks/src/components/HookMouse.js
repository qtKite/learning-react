import React, { useState, useEffect } from 'react'

function HookMouse() {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePos = e => {
    console.log('MouseEvent')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('Useeffect called')
    window.addEventListener('mousemove', logMousePos)

    return () => {
      console.log('Component unmounting code')
      window.removeEventListener('mousemove', logMousePos)
    }
  }, [])

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  )
}

export default HookMouse
