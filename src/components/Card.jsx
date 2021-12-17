
import "./card.css"

export const Card = ({ person }) => {
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