import React, { useState } from 'react';
import { TiMediaPlayReverse } from "react-icons/ti";
import '../Styles/Main.css';

const Main = () => {
  const [showFileInput, setShowFileInput] = useState(false);

  const handleUploadClick = () => {
    setShowFileInput(true);
  };

  return (
    <>
      <div className='video__div'>
        <TiMediaPlayReverse
          style={{
            marginLeft: '30px',
            color: 'grey',
            marginTop: '130px'
          }}
        />
        <p className='Main__text'>Videos</p>
      </div>
      <div className='input__container'>
        <input type='text' className='input__url' placeholder='Please insert URL' />
        <h4 className='heading__or'>or</h4>
        <h4 className='input__video' onClick={handleUploadClick}>upload</h4>
        {showFileInput && (
          <label htmlFor='fileInput' className='input__video'>
            Upload
            <input type='file' id='fileInput' className='input__video' />
          </label>
        )}
      </div>
    </>
  );
};

export default Main;
