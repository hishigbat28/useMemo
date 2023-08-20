import React, { useState, useMemo } from 'react'

const App = () => {
  const [number, setNumber] = useState('')
  const doubleNumber = useMemo(() => slowFunction(number), [number])
  const [dark, setDark] = useState(false)
  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  }

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Өнгө өөрчлөх
      </button>
      <h1 style={themeStyles}>{doubleNumber}</h1>
    </>
  )
}

function slowFunction(num) {
  console.log('Slow function')
  for (let i = 0; i <= 1000000000000000; i++) {
    return num * 2
  }
}

export default App
