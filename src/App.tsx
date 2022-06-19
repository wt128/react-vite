import { useState } from 'react'
import logo from './logo.svg'
import Button from '@mui/material/Button';
import './App.css'
import { Card } from './pages/TodoList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Card />
    </div>
  )
}

export default App
