import {string, shape } from 'prop-types';

import "./card.css"

const Card = ({ person }) => {
    return(
        <div className="card">
            <div className="card__img">
                <img src={person.img} alt="Person" />
            </div>
            <div className="card__name">
                <h2>{person.name}</h2>
            </div>
            <div className="card__details">
                <p>{person.details}</p>
            </div>

        </div>
    );
}

Card.propTypes = {
    person: shape({
        img: string.isRequired,
        name: string.isRequired,
        details: string
    })
}

export default Card;