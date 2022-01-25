import React, { useState } from 'react';
import './index.css';

const App = () => {

  // URL: https://random.dog/woof.json

  // Method
  const [image, setImage] = useState({});

  // Function
  const handleFetch = async () => {

    // Request
    const res = await fetch("https://random.dog/woof.json");
    // console.log(res);

    // JSON
    const data = await res.json();
    // console.log(data);

    // Display it
    // console.log(data.url);

    // Apply to hook
    setImage(data);
  };






  return (
    <div>
      <h1 className='theTitle'>Funny OR Cute Dog Images.</h1>
      <button onClick={handleFetch}>GIVE ME IMAGE</button>
      <p>Bytes for this Image: {image.fileSizeBytes}</p>
      <img src={image.url} alt="" />
    </div>
  );
}

export default App;
