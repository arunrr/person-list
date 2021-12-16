
import { Card } from "./Card";


export const PersonList = ({ profile }) => {
    return(
        <div className="list">
            {profile.map((person) => <Card key={person.name} person={person} />)}
        </div>
    );
}