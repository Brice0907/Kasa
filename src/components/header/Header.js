import './styles/Header.scss'
import logo from './assets/LOGO.svg'
import { NavLink } from 'react-router-dom'


function Header() {

    return <header className='header'>
        <img src={logo} alt='Logo Kasa' className='header_logo' />
        <nav className='header_nav'>
            <ul className='header_nav_ul'>
                <li className='header_nav_ul_li'>
                    <NavLink to='' end className={({ isActive }) => isActive ? 'patate' : undefined }>Accueil</NavLink>
                </li>
                <li className='header_nav_ul_li'>
                    <NavLink to='/propos' end className={({ isActive }) => isActive ? 'patate': undefined }>A Propos</NavLink>
                </li>
            </ul>
        </nav>
    </header>
}

export default Header