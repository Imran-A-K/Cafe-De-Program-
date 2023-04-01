import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Body from './Components/Main/Body'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   <Header />
   <Body />
   
    </div>
  )
}

export default App
