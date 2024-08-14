import { Link } from 'react-router-dom'
import './Header.scss'


function Header () {
    return (
      <header>
        <div>
          Logo
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
          </ul>
        </nav>


      </header>
      )
}

export default Header
