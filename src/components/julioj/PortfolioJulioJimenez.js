import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import SearchBar from "../subcomponents/Searchbar";
import Boxes from "../subcomponents/Boxes";

function Portfolio(properties) {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);
  
    useEffect(() => {
        // get all images from the images directory
        const imageContext = require.context('../images', false, /\.(png|jpe?g|svg)$/);
        const images = imageContext.keys().map(imageContext);
        setImages(images);
    }, []);
  
    const filteredImages = images.filter(image => {
        return image && String(image.name).toLowerCase().includes(query.toLowerCase());
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