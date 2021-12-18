import { arrayOf, string, shape } from 'prop-types';

import "./list.css"

import Card  from "./Card";


const PersonList = ({ profile }) => {
    return(
        <div className="list">
            {profile.map((person) => <Card key={person.name} person={person} />)}
        </div>
    );
}

PersonList.propTypes = {
    profile: arrayOf(shape({
        img: string.isRequired,
        name: string.isRequired,
        details: string
    })).isRequired
}

export default PersonList;