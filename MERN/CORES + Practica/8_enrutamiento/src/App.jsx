import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, NavLink, Navigate } from 'react-router-dom'
import InfoCard from './components/InfoCard'
import HomePage from './components/Home'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes >
        <Route path="/" element={<Navigate to="/home" />}></Route>

        <Route path="/home" element={<HomePage />}></Route>

        <Route path="vehicle/:id" element={<InfoCard />}>
          <Route path=":name" element={<InfoCard />} >
            <Route path=":url" element={<InfoCard />} />
          </Route>
        </Route>

      </Routes>

    </>
  )
}

export default App
