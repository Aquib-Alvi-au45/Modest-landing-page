import React from 'react'
import './Card.css'

const Card = ({title,src}) => {
    return (
        <article className='card'>
            <img src={src} />
            <h3>{title}</h3>
            <p>Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.</p>
        </article>
    )
}

export default Card
