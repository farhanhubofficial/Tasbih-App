import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

function Index({ url, limit, page }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setloading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setloading(true);
      const response = await fetch(`${getUrl}?page=${page} &limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setloading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setloading(false);
    }
  }
  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    console.log(currentSlide);
  }
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    console.log(currentSlide);
  }
 

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  //   console.log(images);
  if (loading) {
    return <div>loading data! please wait</div>;
  }
  if (errorMsg !== null) {
    return <div>error ocurred !{errorMsg} </div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrevious}
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
                
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleNext}
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button key={index} className="current-indicator"></button>
            ))
          : null}
      </span>
    </div>
  );
}

export default Index;
