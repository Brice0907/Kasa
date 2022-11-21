import { useState } from 'react'
import './styles/slideshow.scss'

export default function Slideshow({ pictures }) {

    const [pictureIndex, setPictureIndex] = useState(0)

    const style = {
        backgroundImage: `url(${pictures[pictureIndex]})`
    }

    const changeIndex = (index) => {
        setPictureIndex((pictureIndex + index + pictures.length) % pictures.length)
    }

    return <div style={style} className='slideshow'>
        {pictures.length > 1 ?
            <>
                <div className='slideshow_fleches'>
                    <i className="fa-solid fa-chevron-left slideshow_fleches_bloc" onClick={() => changeIndex(-1)}></i>
                    <i className="fa-solid fa-chevron-right slideshow_fleches_bloc" onClick={() => changeIndex(1)}></i>
                </div><div className='slideshow_number'>{pictureIndex + 1}/{pictures.length}</div>
            </>
            : null}

    </div>
}