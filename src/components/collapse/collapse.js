import './styles/collapse.scss'
import { useState } from 'react'

export default function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="collapse_bloc" onClick={() => setIsOpen(!isOpen)}>
            <div className="collapse_bloc_list">
                <span className="collapse_bloc_list_text">{title}</span>
               {isOpen ? <i className="fa-solid fa-chevron-down collapse_bloc_list_icon_fermé"></i> : <i className="fa-solid fa-chevron-down collapse_bloc_list_icon_ouvert"></i>} 
            </div>
            {isOpen &&
                <div className="collapse_bloc_paragraphe">
                        {children}
                </div>
            }
        </div>
    )
}