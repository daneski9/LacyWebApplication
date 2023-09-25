import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import SearchBar from "../subcomponents/Searchbar";
import Box from "../subcomponents/Box";
import './julioCSS/PortfolioJulioJimenez.css';
import Footer from './Footer';
import { storage } from "../../DataBase";
import { ref, listAll, getDownloadURL } from "firebase/storage";



function Portfolio(properties) {
    // TODO: Finish the search implementation
    // TODO: Make it so that they load in boxes and properly crop and center on the image while retaining quality. 
    //      IE Fill to the box and any overflow gets cropped.
    //      Make it so that when an image can't load it is a gray box
    //      Make it so that the boxes load in cols of 2 to 4
    //      Make it so that if a box does not have an image to load it will load a gray box.

    let [query, setQuery] = useState('');

    // A List to hold the image file names
    // reference video: https://www.youtube.com/watch?v=YOAeBSCkArA
    const [imageList, setImageList] = useState([]);
    const imageListRef = ref(storage, "ImageData/");

    useEffect(()=>{
        listAll(imageListRef)
        .then((response) => {
                console.log(response);
                response.items.forEach((item)=>{
                    getDownloadURL(item).then((url)=>{
                        setImageList((prev) => [...prev, url]);
                    });
                });
            });

    // KEEP THE NEXT LINE AS ```},[]);``` OR ELSE SAY HELLO TO A RAM BOMB!!!!      
    },[]);


    return (
        <>
            <Navbar />

            <h1 className="galleryTitle">Gallery of Recent Tattoos</h1>

            <div className="search-container">
            <SearchBar query={query} onChange={setQuery} />
            </div>

                <div className="bannerGrid">
                {imageList.map((image, url) => (
                    <Box data={image} index={image} key={image} />
                ))} </div>

            <Footer />
        </>
    );
}
export default Portfolio;