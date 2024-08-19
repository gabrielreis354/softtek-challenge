import './Header.scss'
import { Link, NavLink }  from 'react-router-dom'
import Logo from '../../svg/Logo'

function Header () {
    return (
      <header>
          <div className='header-content'>
              <Link className='logo' to={"/"}>
                <Logo width={120} icon_color={"#e1ffff"} icon_bg_color={"#24a5a4"} name_color={"#24a5a4"}/>
              </Link>
            <nav>
                <NavLink className={ ({isActive}) => isActive ? "navlink on": "navlink" } to="/">
                  Home
                </NavLink>
                <NavLink className={({isActive}) => isActive ? "navlink on": "navlink" }  to="/about"> 
                  Sobre
                </NavLink>
                <NavLink className={({isActive}) => isActive ? "navlink on": "navlink" }  to="/login"> 
                  Login
                </NavLink>
            </nav>
          </div>
        </header>
    )
}

export default Header
