import './styles/rating.scss'

export default function Rating({ rating }) {
    
    return <div className='appart_info_rate'>
        {Array(5).fill(1).map((_, i) =>
            <i key={i} className="fa-solid fa-star appart_info_etoile_nocolor" data-color={i < rating}></i>
        )}
    </div>
}