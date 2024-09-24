import React, { useState, useEffect } from "react";
import axios from "axios";

const AirlineImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
          params: { query: 'airline', per_page: 10 },
          headers: {
            Authorization: 'Client-ID 5cgFu4VxgY9XdDE2VY8hfPZSrTqBoLvLfxBadtMjclI',
          },
        });
        setImages(response.data.results);
        setLoading(false);
      } catch (err) {
        setError('Error fetching images.');
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Airline Images</h2>
      <div className="image-grid" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((img, index) => (
          <img 
            key={index} 
            src={img.urls.small} // Use img.urls.small to get the image URL
            alt={`Airline ${index}`} 
            style={{ width: "200px", margin: "10px" }} 
          />
        ))}
      </div>
    </div>
  );
};

export default AirlineImages;
