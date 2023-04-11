import { useState } from "react";
import Navbar from "../Navbar";
import SearchBar from "../subcomponents/Searchbar";
import Box from "../subcomponents/Box";
import './julioCSS/PortfolioJulioJimenez.css';

function Portfolio(properties) {
    // TODO: Finish the search implimentation
    // TODO: Make it so that they load in boxes and propperly crop and center on the image while retaining quality. 
    //      IE Fill to the box and any overflow gets cropped.
    //      Make it so that when an image can't load it is a gray box
    //      Make it so that the boxes load in cols of 2 to 4
    //      Make it so that if a box does not have an image to load it will load a gray box.


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
                    {imageArray.map((image, index) => (
                        <Box data={urlPath + image} index={index} key={image} />
                    ))}
                </div>
            </>
        );
    }
    else{
        // local testing
        imageArray = imageContext.keys().map(imageContext);
        console.log(imageArray);

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
                    {imageArray.map((image, index) => (
                        <Box data={image} index={image} key={image} />
                    ))}
                </div>
            </>
        );
    }

    
  }
  
  export default Portfolio;