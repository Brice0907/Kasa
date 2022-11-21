import './styles/filtre.scss'

export default function Filtre({ tags }) {

    return <ul className='appart_info_tags'>
        {tags.map((tag) =>
            <li className='appart_info_tags_name' key={tag}>{tag}</li>
        )}
    </ul>
}