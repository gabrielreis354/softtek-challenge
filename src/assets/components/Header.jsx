import { NavLink }  from 'react-router-dom'
import Logo from '../svg/Logo'
import './Header.scss'


function Header () {
    return (
      <header>
          <div className='header-content'>
            <div>
              <Logo className="logo" width={120} icon_color={"#001010"} icon_bg_color={"#24a5a4"} name_color={"#24a5a4"}/>
            </div>
            <nav>
                <NavLink className={ ({isActive}) => isActive ? "navlink on": "navlink" } to="/">
                  Home
                </NavLink>
                <NavLink className={({isActive}) => isActive ? "navlink on": "navlink" }  to="/about"> 
                  About
                </NavLink>
                <NavLink className={({isActive}) => isActive ? "navlink on": "navlink" }  to="/link"> 
                  Link
                </NavLink>
            </nav>
          </div>

          <div className='glow'>

          </div>
        </header>
    )
}

export default Header
