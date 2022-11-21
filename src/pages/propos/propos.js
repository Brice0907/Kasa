import Banner from "../../components/banner/Banner.js"
import './styles/propos.scss'
import Collapse from "../../components/collapse/collapse.js"
import Paysage from './assets/bannerpropos.jpg'

export default function Propos() {

    const style = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${Paysage})`
    }

    return <div>
        <Banner
            image={style}
        />
        <div className="collapse">
            <Collapse
                title="Fiabilité" >
                Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
            </Collapse>

            <Collapse
                title="Respect" >
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
            </Collapse>

            <Collapse
                title="Service" >
                Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
            </Collapse>
            
            <Collapse
                title="Sécurité" >
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
            </Collapse>
        </div>
    </div>
}