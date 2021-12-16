import { useState } from "react/cjs/react.development";
import "./App.css";

import { PersonList } from "./components/PersonList";

const person = [
  {
    img: "#",
    name: "John Doe",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vero nostrum non vitae commodi accusantium neque reprehenderit voluptate deserunt. Inventore incidunt ratione nobis possimus quo quae dolorum saepe eum totam.\
  Aliquid veritatis cumque perspiciatis nulla doloremque, in, atque mollitia laboriosam dolorem similique voluptatem nobis enim ducimus natus quidem molestias, dicta magnam provident sapiente reprehenderit quo obcaecati consequuntur asperiores fugit. Unde.\
  Esse odio fugit dignissimos adipisci neque. Quod neque quasi deserunt unde pariatur corporis dolorem deleniti fugit commodi provident ipsam excepturi non sit perferendis repellendus impedit tempore similique, debitis explicabo vero.\
  Exercitationem voluptas, ex sit illo quas harum blanditiis optio ipsam quia debitis sunt, quo a? Saepe, est dignissimos quis provident unde sequi, recusandae consectetur exercitationem doloribus, debitis nam ratione atque?",
  },
  {
    img: "#",
    name: "Jane Doe",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vero nostrum non vitae commodi accusantium neque reprehenderit voluptate deserunt. Inventore incidunt ratione nobis possimus quo quae dolorum saepe eum totam.\
Aliquid veritatis cumque perspiciatis nulla doloremque, in, atque mollitia laboriosam dolorem similique voluptatem nobis enim ducimus natus quidem molestias, dicta magnam provident sapiente reprehenderit quo obcaecati consequuntur asperiores fugit. Unde.\
Esse odio fugit dignissimos adipisci neque. Quod neque quasi deserunt unde pariatur corporis dolorem deleniti fugit commodi provident ipsam excepturi non sit perferendis repellendus impedit tempore similique, debitis explicabo vero.\
Exercitationem voluptas, ex sit illo quas harum blanditiis optio ipsam quia debitis sunt, quo a? Saepe, est dignissimos quis provident unde sequi, recusandae consectetur exercitationem doloribus, debitis nam ratione atque?",
  },
];

function App() {
  const [profile, setProfile] = useState(person);
  return (
    <div className="App">
      <PersonList profile={profile} />
    </div>
  );
}

export default App;
