import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './assets/components/Header'
import Home from './assets/pages/Home'
import About from './assets/pages/About'

import './App.scss'


function App() { 

    return (
        <>
            <Header/>

            <Routes>
                <Route index path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
            </Routes>

            

        </>

    )
}
 export default App