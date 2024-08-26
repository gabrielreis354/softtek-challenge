import './index.scss'
import { Link, NavLink }  from 'react-router-dom'
<<<<<<<< HEAD:src/components/sections/Header/index.jsx
import Logo from '../../../assets/svg/Logo'
========
import Logo from '../../assets/svg/Logo.jsx'
>>>>>>>> 41a40e0664dbb8a07287f72a6162d0aaf6e1a014:src/components/Header/Header.jsx

function Header () {
    return (
      <header>
          <div className='header-content'>
              <Link className='logo' to={"/"}>
                <Logo width={125} icon_color={"#e1ffff"} icon_bg_color={"#24a5a4"} name_color={"#24a5a4"}/>
              </Link>
            <nav>
                <NavLink className={ ({isActive}) => isActive ? "navlink on": "navlink" } to="/">
                  Home
                </NavLink>
                <NavLink className={({isActive}) => isActive ? "navlink on": "navlink" }  to="/about">
                  Sobre o projeto
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
