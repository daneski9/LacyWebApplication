import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import SearchBar from "../subcomponents/Searchbar";
import Boxes from "../subcomponents/Boxes";
import Box from "../subcomponents/Box";

function Portfolio(properties) {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);

    // The directory path where the images are located
    const dirPath = '../images/';

    // An array to hold the image file names
    const imageArray = [];

    
    // Load the images from the server and add them to the array
    fetch(dirPath)
    .then(response => response.text())
    .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const imgElements = doc.querySelectorAll('img');
        imgElements.forEach(img => {
            const src = img.getAttribute('src');
            imageArray.push(src);
        });
        console.log(imageArray);
    })
    .catch(error => {
        console.error('Error loading images:', error);
    });
  
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
                
            </div>
            <div className="Boxes">
                {imageArray.map((banner) => (
                <Box data={banner}/>
                ))}
            </div>
        </>
    );
  }
  
  export default Portfolio;