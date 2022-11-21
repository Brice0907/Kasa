import './styles/Footer.scss'
import Logo from './assets/LOGOblanc.svg'

function Footer() {
    return <div className='footer'>
        <img src={Logo} alt='Logo Kasa' className='footer_logo' />
        <div className='footer_text'>© 2020 Kasa. All rights reserved</div>
    </div>
}

export default Footer