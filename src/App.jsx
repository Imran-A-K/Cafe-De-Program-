import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   <Header />
   <Main />
   
    </div>
  )
}

export default App
