import React, { useState } from 'react';
import '../Explore/Modal.css';
import { useNavigate } from 'react-router-dom';

const Modal = ({ show, item, onClose }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleDownloadClick = () => {
    setLoading(true);
    // Simulating download action with a delay of 2 seconds
    setTimeout(() => {
      navigate('/Download');
      setLoading(false);
    }, 2000);
  };

  if (!show) {
    return null;
  }

  let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  return (
    <div className='overlay'>
      <div className='overlay-inner'>
        <button className='close' onClick={onClose}>x</button>
        <div className='inner-box'>
          <img src={thumbnail} alt="Thumbnail" />
          <div className='info'>
            <h1>{item.volumeInfo.title}</h1>
            <h3>{item.volumeInfo.authors}</h3>
            <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4><br></br>
            <a href={item.volumeInfo.previewLink}><button>More</button></a><br></br>
            {loading ? (
              <button disabled>Loading...</button>
            ) : (
              <button onClick={handleDownloadClick}>Download</button>
            )}
          </div>
        </div>
        <h4 className='description'>{item.volumeInfo.description}</h4>
      </div>
    </div>
  );
};

export default Modal;
