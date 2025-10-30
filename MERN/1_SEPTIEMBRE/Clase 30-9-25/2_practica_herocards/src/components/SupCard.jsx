import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { useState } from 'react'
import styles from '../css/SupCard.module.css'

const SupCard = (name, description, likes, color, key) => {
    const [numLikes, setNumLikes] = useState(likes);

    const textOnBg = ['light', 'warning'].includes(color) ? 'text-dark' : 'text-white';

    return (
        <div key={key} className={`card bg-${color} ${styles.superCard} ${textOnBg}`}>
            <div className="card-header">
                <strong>{name}</strong>
                <img src="https://media1.tenor.com/m/41VtU4r0L9UAAAAC/test.gif" alter="a"></img>
            </div>
            <div className='card-body'>
                <p>{description}</p>
            </div>
            <div className='card-footer'>
                <button onClick={() => setNumLikes(numLikes + 1)}>{numLikes} like(s)</button>
            </div>

        </div>
    )
}



export default SupCard;