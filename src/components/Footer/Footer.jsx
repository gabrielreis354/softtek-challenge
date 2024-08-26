import './index.scss'
import { Link, NavLink }  from 'react-router-dom'
<<<<<<<< HEAD:src/components/sections/Footer/index.jsx
import Logo from '../../../assets/svg/Logo'
========
import Logo from '../../assets/svg/Logo.jsx'
>>>>>>>> 41a40e0664dbb8a07287f72a6162d0aaf6e1a014:src/components/Footer/Footer.jsx

function Header () {
    return (
      <footer>
          <div className='footer-content'>
            <div className='footer-content-top'>
                <Link className='logo' to={"/"}>
                    <Logo width={105} icon_color={"#e1ffff"} icon_bg_color={"#088181"} name_color={"#e1ffff"}/>
                </Link>
            </div>
            <div className='footer-content-bottom'>
                <div className='copyright'>
                    Projeto acadêmico para a <Link to={"https://fiap.com.br/"}>Fiap</Link>.
                </div>
                <nav>
                    <NavLink to="/public">
                    Home
                    </NavLink>
                    <NavLink   to="/about">
                    Sobre
                    </NavLink>
                    <NavLink  to="/login">
                    Login
                    </NavLink>
                </nav>
            </div>
          </div>
        </footer>
    )
}

export default Header
