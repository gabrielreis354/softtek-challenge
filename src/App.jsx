import Header from './components/sections/Header'
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

        </>
    )
}
 export default App