import Header from './components/sections/Header'
import Footer from './components/sections/Footer'
import PageWrapper from './components/PageWrapper'
import './App.scss'

import {useLocation } from 'react-router-dom';


function App() { 
    const location = useLocation();
    const isDashboardRoute = location.pathname === '/dashboard';

    return (
        <>
            {!isDashboardRoute && <Header />}
            <PageWrapper/>
            {!isDashboardRoute && <Footer />}
        </>
    )
}
 export default App