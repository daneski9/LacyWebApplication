import { useState, useEffect, useMemo } from "react";
import Navbar from "../Navbar";
import './julioCSS/PortfolioJulioJimenez.css';
import Footer from './Footer';
import { storage } from "../../DataBase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { Link } from 'react-router-dom';



function Portfolio(properties) {

    // A List to hold the image file names
    // reference video: https://www.youtube.com/watch?v=YOAeBSCkArA
    const [imageList, setImageList] = useState([]);
    const imageListRef = ref(storage, "Portfolio-page/");

    useEffect(() => {
        listAll(imageListRef)
            .then((response) => {
                const downloadPromises = response.items.map((item) => {
                    return getDownloadURL(item);
                });
    
                Promise.all(downloadPromises)
                    .then((urls) => {
                        setImageList(urls);
                    });
            });
    }, [imageListRef]);
    
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [currentPage, setCurrentPage] = useState(1); // Start with page 1
    const imagesPerPage = 16; // Number of images per page

    // Calculate total number of pages
    const total_pages = Math.ceil(imageList.length / imagesPerPage);
    const currentImages = useMemo(() => 
    imageList.slice((currentPage - 1) * imagesPerPage, currentPage * imagesPerPage), 
    [imageList, currentPage]);


    // Function to update the page number
    const goToNextPage = () => {
        if (currentPage < total_pages) setCurrentPage(prev => prev + 1);
        window.scrollTo(120, 120);
    }

    const goToPreviousPage = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
        window.scrollTo(120, 120);
    }

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
                <div className="bannerGridWrapper">
                    <div className="bannerGrid">
                    {currentImages.map((image, index) => (
                        <Box 
                            data={image} 
                            index={(currentPage - 1) * imagesPerPage + index} 
                            key={image} 
                            onClick={() => {
                                setSelectedImage(image);
                                setSelectedImageIndex((currentPage - 1) * imagesPerPage + index);
                            }} 
                        />
                    ))}
                    </div>
                </div>
                <div className="pagination">
                    {currentPage > 1 && <button className="pagination-button" onClick={goToPreviousPage}>← Previous</button>}
                    <span className="pagination-text">Page {currentPage} of {total_pages}</span>
                    {currentPage < total_pages && <button className="pagination-button" onClick={goToNextPage}>Next →</button>}
                </div>
            </div>
            {selectedImage && (
                <div className="modal-portfolio" onClick={(e) => {
                    if (e.target.classList.contains('modal-portfolio')) {
                        setSelectedImage(null);
                    }
                }}>
                    <img src={selectedImage} alt="Selected" className="modal-image" />
                    <div className="arrow right-arrow" onClick={() => {
                        if (selectedImageIndex < imageList.length - 1) {
                            setSelectedImage(imageList[selectedImageIndex + 1]);
                            setSelectedImageIndex(selectedImageIndex + 1);
                        }
                    }}>→</div>
                    <div className="arrow left-arrow" onClick={() => {
                        if (selectedImageIndex > 0) {
                            setSelectedImage(imageList[selectedImageIndex - 1]);
                            setSelectedImageIndex(selectedImageIndex - 1);
                        }
                    }}>←</div>
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