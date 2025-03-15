import { useState } from 'react' 
import './App.css'
import Navbar from './Component/Navbar'
import Slider from './Component/Slider'
import Homestay from './Component/Pages/Homestay'

function App() { 

  return (
    <>  
    <Navbar/>
    <Slider/>
    <Homestay/>
    </>
  )
}

export default App
