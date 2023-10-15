import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import SearchBar from "../subcomponents/Searchbar";
import './julioCSS/PortfolioJulioJimenez.css';
import Footer from './Footer';
import { storage } from "../../DataBase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { Link } from 'react-router-dom';



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

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="galleryTitle">Gallery of Recent Tattoos</h1>
                <Link to="/JulioJimenez/inquiry">
                    <button className='appointment-btn' onClick={() => {
                    window.scroll({
                        top: 0,
                        left: 0
                    });
                    }}>MAKE AN APPOINTMENT</button>
                </Link>
                <div className="bannerGrid">
                    {imageList.map((image, url) => (
                        <Box data={image} index={image} key={image} onClick={() => setSelectedImage(image)} />
                    ))}
            </div>
            </div>
            {selectedImage && (
                <div className="modal" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} alt="Selected" className="modal-image" />
                </div>
            )}
            <Footer />
        </>
    );
}

function Box({ data, index, onClick }) {
    return (
      <div className='box'>
          <img
              className="box img"
              src={`${data}`} 
              alt={`${index}`}
              onClick={onClick}  
          />
      </div>
    );
}
  
  export default Portfolio;