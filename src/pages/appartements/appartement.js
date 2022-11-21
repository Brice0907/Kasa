import { useLoaderData, useNavigate } from 'react-router-dom'
import Collapse from '../../components/collapse/collapse.js'
import Filtre from '../../components/filtre/filtre.js'
import Rating from '../../components/rating/rating.js'
import Slideshow from '../../components/slideshow/Slideshow.js'
import User from '../../components/user/user.js'
import './styles/appartement.scss'


export default function Appartement() {
    const appartement = useLoaderData()

    return <div>
        <Slideshow pictures={appartement.pictures} />

        <div className='appart'>
            <div className='appart_flex'>
                <div>
                    <div className='appart_flex_title'><h1>{appartement.title}</h1></div>
                    <div className='appart_location'>{appartement.location}</div>
                    <Filtre tags={appartement.tags} />
                </div>

                <div className='appart_info'>
                    <User user={appartement.host} />
                    <Rating rating={appartement.rating} />
                </div>
            </div>
            <div className='appart_list'>

                <Collapse
                    title='Description' >
                    {appartement.description}
                </Collapse>

                <Collapse
                    title='Equipements'>
                    {appartement.equipments.map((content) => <li key={content}>{content}</li>)}
                </Collapse>

            </div>
        </div>
    </div>
}

export async function loader({ params }) {
    const apartments = (await import('../../datas/logements.json')).default
    const apartement = apartments.find(apartment => apartment.id === params.apartmentId)
    if (!apartement) {
        throw "error"
    }
    return apartement
}
