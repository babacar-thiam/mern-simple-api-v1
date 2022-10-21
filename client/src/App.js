import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import RecordList from './components/userList'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
         <Route exact path="/" element={<RecordList />} />
      </Routes>
    </div>
  )
}

export default App
