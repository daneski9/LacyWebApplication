import { useState } from "react";
import Navbar from "../Navbar";
import SearchBar from "../subcomponents/Searchbar";
import Box from "../subcomponents/Box";
import './PortfolioJulioJimenez.css';

function Portfolio(properties) {
    const [query, setQuery] = useState('');

    // An array to hold the image file names
    const [imageArray, setImageArray] = useState([]);

    // The directory path where the images are located
    const dirPath = './images/';

    let x = 0;

    // Load the images from the server and add them to the array
    fetch(dirPath)
    .then(response => response.text())
    .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const imgElements = doc.querySelectorAll('img');
        imgElements.forEach(img => {
            x += 1;
            const src = img.getAttribute('src');
            imageArray.push(src);
        });
        console.log(imageArray);
        console.log(x);
        setImageArray(imageArray);
    })
    .catch(error => {
        console.error('Error loading images:', error);
    });


    const dataArray = new Array(imageArray.length);

    imageArray.forEach(element => dataArray.push(element));
    // FIXME console says this is empty...

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
            <div>
                <textarea rows={5} style={{ width: '100%' }} value={JSON.stringify(imageArray, null, 2)} readOnly />
            </div>
            <div className="bannerGrid">
                {imageArray.map((image) => (
                    <Box data={dirPath + image} key={image} />
                ))}
            </div>
        </>
    );
  }
  
  export default Portfolio;