import './styles/Banner.scss'
import './styles/bannerpropos.scss'

function Banner({ image, text }) {
    
    return <div className='banner banner_propos' style={image}>
            <div className='banner_text'>{text}</div>
    </div>
}

export default Banner