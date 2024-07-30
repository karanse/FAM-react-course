import { useState } from "react";
const ANIMAL = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">Animal</label>
        <select
          name=""
          id="animal"
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
        >
          <option />
          {ANIMAL.map((animal) => (
            <option key={animal}>{animal}</option>
          ))}
        </select>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
