import { useState } from "react";
import Navbar from "../Navbar";
import SearchBar from "../subcomponents/Searchbar";
import Box from "../subcomponents/Box";
import './PortfolioJulioJimenez.css';

function Portfolio(properties) {
    const [query, setQuery] = useState('');

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


    const dataArray = new Array(imageArray.length);

    imageArray.forEach(element => dataArray.push(element));

    return (
        <>
            <Navbar />
            <div
            className="container"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '50px',
            }}
            >
            <SearchBar query={query} onChange={setQuery} />
            </div>
            <div className="bannerGrid">
            {dataArray.map((image) => (
                <Box data={dirPath + image} key={image} />
            ))}
            </div>
        </>
    );
  }
  
  export default Portfolio;