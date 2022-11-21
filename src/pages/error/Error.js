import { Link } from "react-router-dom"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import './styles/Error.scss'

export default function Error() {
    return <>
        <Header />
        <div className="bloc">
            <p className="bloc_404">404</p>
            <p className="bloc_text">Oups ! La page que vous demandez n'existe pas.</p>
            <Link to='/' className="bloc_link">Retourner sur la page d'Accueil</Link>
        </div>
        <Footer />
    </>
}