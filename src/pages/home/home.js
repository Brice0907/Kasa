import './styles/Home.scss'
import Banner from '../../components/banner/Banner.js'
import Card from '../../components/card/card'
import { Link, useLoaderData } from 'react-router-dom'
import Paysage from './assets/paysage.png'


export default function Home() {
    const logements = useLoaderData()
    
    const style = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${Paysage})`
    }

    return <div className='home'>
        <Banner 
        text='Chez vous, partout et ailleurs'
        image={style}
        />
        <div className='home_bloc'>
            <ul className='home_bloc_page'>
                {logements.map((logement) =>
                    <Link to={`/apartment/${logement.id}`} key={logement.id} className='home_bloc_page_href'>
                        <Card logement={logement} />
                    </Link>
                )}
            </ul>
        </div>
    </div>
}

export async function loader() {
    return ( await import ('../../datas/logements.json')).default
}