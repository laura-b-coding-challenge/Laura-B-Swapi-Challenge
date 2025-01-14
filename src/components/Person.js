import HomeWorld from "./HomeWorld";
import { useState, useEffect } from "react";

export default function Person({ person }) {
  const [isHomeWorldDisplayed, setSelectedHomeWorld] = useState(false);
  const [homeWorld, setHomeWorld] = useState(null);

  const function displayHomeWorld(element) {
    
  }

  const seeHomeWorld = async (person) => {
    try {
      const homeworld = await fetch(person.homeworld);
      console.log(homeWorld);
      //   setHomeWorld(homeWorld);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {person.name}
      <button onClick={setSelectedHomeWorld}>See Home World</button>
      {isHomeWorldDisplayed ? <HomeWorld homeWorld={homeWorld} /> : <></>}
    </div>
  );
}
