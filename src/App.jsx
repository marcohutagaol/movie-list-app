import { useState } from 'react'
import './App.css'

const Card = ({title}) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

const App = () => {
  return (
    <>
      <h2>Functional Arrow Component</h2>
      <Card title="Card 1" />
      <Card title="Card 2" />
      <Card title="Card 3" />
    </>
  )
}

export default App
