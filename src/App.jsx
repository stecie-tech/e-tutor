import Button from './components/Button'
import "./main.css"
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import Login from "./pages/Login"
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App
