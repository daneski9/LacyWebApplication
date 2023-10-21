import { useState, useEffect, useCallback } from "react";
import Navbar from "../Navbar";
import SearchBar from "../subcomponents/Searchbar";
import './julioCSS/PortfolioJulioJimenez.css';
import Footer from './Footer';
import { storage } from "../../DataBase";
import { ref, list, getDownloadURL } from "firebase/storage";
import { Link } from 'react-router-dom';



function Portfolio(properties) {
    const [imageList, setImageList] = useState([]);
    const imageListRef = ref(storage, "Portfolio-page/");

    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = 16;
    const [pageToken, setPageToken] = useState(null);

    const fetchImages = useCallback(async (currentPage, currentToken) => {
        const res = await list(imageListRef, {
            maxResults: imagesPerPage,
            pageToken: currentPage > 1 ? currentToken : undefined
        });

        const downloadPromises = res.items.map(item => getDownloadURL(item));
        const urls = await Promise.all(downloadPromises);
        setImageList(urls);

        if (res.nextPageToken) {
            setPageToken(res.nextPageToken);
        }
    }, [imageListRef]); // imageListRef is a dependency for fetchImages

    useEffect(() => {
        fetchImages(currentPage, pageToken);
    }, [currentPage, fetchImages, imageListRef, pageToken]); // include fetchImages and pageToken in the dependency array

    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const total_pages = Math.ceil(imageList.length / imagesPerPage);

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