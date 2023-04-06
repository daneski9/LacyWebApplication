import { useState } from "react";
import Navbar from "../Navbar";
import SearchBar from "../subcomponents/Searchbar";
import Box from "../subcomponents/Box";
import './PortfolioJulioJimenez.css';

function Portfolio(properties) {
    let [query, setQuery] = useState('');

    // An array to hold the image file names
    // let [imageArray, setImageArray] = useState(new Array(0));
    let imageArray = new Array(0);
    
    // The url directory path where the images are located
    // FIXME: change this to URL once server is live
    const urlPath = '../images/';
    
    // This is only for local testing
    const imageContext = require.context("../images", true, /\.(png|jpg|jpeg|gif)$/);

    const local = true;

    if (!local){
        // Server

        // Load the images from the server and add them to the array
        fetch(urlPath)
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
            // setImageArray(imageArray);
        })
        .catch(error => {
            console.error('Error loading images:', error);
        });
    }
    else{
        // local testing
        imageArray = imageContext.keys().map(imageContext);
        console.log(imageArray);
    }

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
                {imageArray.map((image) => (
                    <Box data={urlPath + image} key={image} />
                ))}
            </div>
        </>
    );
  }
  
  export default Portfolio;