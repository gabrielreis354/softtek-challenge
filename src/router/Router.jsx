import '../assets/sass/Router.scss'
import { Route, Routes } from 'react-router-dom'
import Home from '../containers/Home/Home.jsx'
import About from '../containers/About/About.jsx'
import Login from '../containers/Login/Login.jsx'
import Dashboard from '../containers/Dashboard/Dashboard.jsx'
import Detail from '../containers/Detail/Detail.jsx'

function Router() {
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

export default Router
