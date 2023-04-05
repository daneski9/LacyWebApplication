import { useState } from "react";
import Navbar from "../Navbar";
import SearchBar from "../Searchbar";


function Portfolio() {
    const [query, setQuery] = useState('');

    function handleQueryChange(value) {
        setQuery(value);
    }

    return (
      <>
      <Navbar />
      <div>
        <SearchBar query={query} onChange={handleQueryChange} />
      </div>
      </>
    );
  }
  
  export default Portfolio;