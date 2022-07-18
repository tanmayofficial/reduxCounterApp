import React from 'react'
import Navbar from './component/Navbar';
import Shop from './component/Shop';
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <div className='container my-4'>
        <Shop />
      </div>
    </div>
  )
}

export default App;