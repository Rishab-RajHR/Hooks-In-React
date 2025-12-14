import React, { useState } from 'react'

const Hooks = () => {
  const [name, setName] = useState("Tovino")
  return (
    <>
      <h2>Hooks in React</h2>
      <h3>Hello, {name}</h3>
      <button onClick={() => setName("Alex")}>Update Name</button>
    </>
  )
}

export default Hooks
