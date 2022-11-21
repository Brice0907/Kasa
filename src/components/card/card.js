import './styles/Card.scss'

export default function Card({ logement }) {
    // const logement = props.logement
    // const {logement} = props

    const style = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${logement.cover})`
    }

    return <li className='card'  style={style}>
        {logement.title}
    </li>
}