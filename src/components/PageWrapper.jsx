import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import './PageWrapper.scss'
<<<<<<< HEAD:src/assets/components/PageWrapper.jsx
import Dashboard from '../pages/Dashboard'
import Detail from '../pages/Detail'
=======
>>>>>>> a1df2f54d6d1e8c028595c996d550742237513b3:src/components/PageWrapper.jsx

function PageWrapper() { 
    return (
        <div className='content-wrapper'>
            <div className='content'>
                <Routes>
                    <Route index path='/' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/dashboard' element={<Dashboard/>} />
                    <Route path='/chamado/:numero' element={<Detail />} />
                    <Route path='*' element={ <>not found</> }/>
                </Routes>
            </div>
        </div>
    )
}

 export default PageWrapper