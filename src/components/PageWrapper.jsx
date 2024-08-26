import './PageWrapper.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Detail from './pages/Detail'

function PageWrapper() {
    return (
        <div className='content-wrapper'>
            <div className='content'>
                <Routes>
                    <Route index path='/' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/dashboard' element={<Dashboard/>} />
                    <Route path='/dashboard/ticket/:numero' element={<Detail />} />
                    <Route path='*' element={ <>not found</> }/>
                </Routes>
            </div>
        </div>
    )
}

 export default PageWrapper