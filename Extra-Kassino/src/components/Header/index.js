/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.css'

const Header = ({empresa}) => {

  return (
    <header>
      <h1>{empresa} DH</h1>
      <nav>
        <ul>
          <li><a href="#">Kassino</a></li>
          <li><a href="#outros">Kassino vs Cassino</a></li>
          <li><a href="#footer">Footer</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;