import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import SearchBar from "../Searchbar";
import Boxes from "./Boxes";


function Portfolio(props) {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);
  
    useEffect(() => {
      // fetch images from API or set default images
      // and update the images state
    }, []);
  
    const filteredImages = images.filter(image => {
      return image.name.toLowerCase().includes(query.toLowerCase());
    });

    return (
      <>
        <Navbar />
        <div className="container">
            <SearchBar
                query={query}
                setQuery={setQuery}
            />
            <Boxes
                filteredImages={filteredImages}
            />
        </div>
      </>
    );
  }
  
  export default Portfolio;