import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'
import './PageWrapper.scss'

function PageWrapper() { 
    return (
        <section className='content-wrapper'>
            <div className='content'>
                <Routes>
                    <Route index path='/' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='*' element={ <>not found</> }/>
                </Routes>
            </div>
        </section>
    )
}

 export default PageWrapper