import { Link, NavLink  } from 'react-router-dom'
import './Header.scss'


function Header () {
    return (
      <header>
        <div>
          logo
        </div>
        <nav>
          <ul>
              <NavLink className={({isActive}) => isActive ? "on": "" } to="/">
                Home
              </NavLink>
              <NavLink className={({isActive}) => isActive ? "on": "" }  to="/about"> 
                About
              </NavLink>
          </ul>
        </nav>


      </header>
      )
}

export default Header
