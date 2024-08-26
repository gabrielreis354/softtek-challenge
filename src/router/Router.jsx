import '../assets/sass/Router.scss'
import { Route, Routes } from 'react-router-dom'
import Home from '../containers/Home'
import About from '../containers/About'
import Login from '../containers/Login'
import Dashboard from '../containers/Dashboard'
import Detail from '../containers/Detail'

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
