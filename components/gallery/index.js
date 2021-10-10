import React, {
  useState,
  useEffect,
  useRef,
} from 'react';
import { 
  array,
} from 'prop-types';

import styles from './gallery.module.scss';

function Gallery({
  data,
}) {
  // set initial imageRange for gallery
  // only showing 10 images at a time
  const [imageRange, setImageRange] = useState({
    high: 10,
    low: 0,
  });

  // set intial array for images to display
  const [imagesToDisplay, setImagesToDisplay] = useState([]);

  // filter out the images that match the current imageRange
  const updateImagesToDisplay = () => {
    const imageData = data.filter( (image, index) => (index < imageRange.high) && (index >= imageRange.low) );

    setImagesToDisplay(imageData);
  };

  // // set intial images to disaply
  useEffect(() => {
    updateImagesToDisplay();
  }, []);

  const [innerWidth, setInnerWidth] = useState(0);

  const getWindowWidth = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    getWindowWidth();
  }, []);

  const galleryRef = useRef(null);

  useEffect(() => {
    console.log({galleryRef});

    console.log(galleryRef.current.offsetWidth);
  }, [galleryRef]);

  return (
    <>
      <h4>Images</h4>
      <ul 
        className={styles.gallery}
        ref={galleryRef}
      >
        {imagesToDisplay && imagesToDisplay.map( (image) => {
          const { fields } = image;

          const {
            title,
            file,
          } = fields;

          const {
            url,
            contentType,
            details,
            fileName,
          } = file;

          const { image: imageDeatil } = details;

          const {
            height,
            width,
          } = imageDeatil;

          const finalUrl = contentType === 'image/jpeg' ? `${url}?fm=webp&q=30` : url;

          return (
            <li key={`${title}-${fileName}`}>
              <img 
                src={finalUrl}
                type={contentType} 
                alt={title} 
                // height={height} 
                width={innerWidth} 
              />
            </li>
        )})}
      </ul>
    </>
  );
}

Gallery.propTypes = {
  data: array.isRequired,
};

export default Gallery;
