import Header from './components/sections/Header'
import Footer from './components/sections/Footer'
import PageWrapper from './components/PageWrapper'
import './App.scss'

import {useLocation } from 'react-router-dom';


function App() { 
    const location = useLocation();
    const isDashboardRoute = location.pathname.startsWith('/dashboard');

    console.log(location)

    return (
        <div className={`${isDashboardRoute ? 'dashboard-app' : 'app'}`}>
            {!isDashboardRoute && <Header />}
            <PageWrapper/>
            {!isDashboardRoute && <Footer />}
        </div>
    )
}
 export default App