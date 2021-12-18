import "./App.css";

import JohnDoe from "./images/john_doe.jpg";
import JaneDoe from "./images/jane_doe.jpg";

import PersonList from "./components/PersonList";

const person = [
  {
    img: JohnDoe,
    name: "John Doe",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vero nostrum non vitae commodi accusantium neque reprehenderit voluptate deserunt. Inventore incidunt ratione nobis possimus quo quae dolorum saepe eum totam.",
  },
  {
    img: JaneDoe,
    name: "Jane Doe",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vero nostrum non vitae commodi accusantium neque reprehenderit voluptate deserunt. Inventore incidunt ratione nobis possimus quo quae dolorum saepe eum totam.",
  },
  {
    img: JaneDoe,
    name: "Jane Doe",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vero nostrum non vitae commodi accusantium neque reprehenderit voluptate deserunt. Inventore incidunt ratione nobis possimus quo quae dolorum saepe eum totam.",
  },
];

function App() {
  return (
    <div className="App">
      <PersonList profile={person} />
    </div>
  );
}

export default App;
