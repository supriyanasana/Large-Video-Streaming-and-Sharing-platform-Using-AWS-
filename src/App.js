import React, { useState } from 'react';
import './App.css'; // Import the CSS file

function App() {
  const [videos, setVideos] = useState([
    { id: 1, name: "Cloud", src: "https://dqjr4ju5r15in.cloudfront.net/cloud.mp4" },
    { id: 2, name: "Avengers", src: "https://dqjr4ju5r15in.cloudfront.net/avengers.mp4" },
    { id: 3, name: "Batman vs Superman", src: "https://dqjr4ju5r15in.cloudfront.net/batman-vs-superman.mp4" },
    { id: 4, name: "Disney", src: "https://dqjr4ju5r15in.cloudfront.net/disney.mp4" },
    { id: 5, name: "Mogali", src: "https://dqjr4ju5r15in.cloudfront.net/mogali.mp4" },
    { id: 6, name: "Star Wars", src: "https://dqjr4ju5r15in.cloudfront.net/starwars.mp4" },
    { id: 7, name: "X-Men", src: "https://dqjr4ju5r15in.cloudfront.net/xmen.mp4" },
    { id: 8, name: "Stars", src: "https://dqjr4ju5r15in.cloudfront.net/stars.mp4" },
    { id: 9, name: "Beach", src: "https://dqjr4ju5r15in.cloudfront.net/beach.mp4" },
    { id: 10, name: "Mountains", src: "https://dqjr4ju5r15in.cloudfront.net/mountains.mp4" },
    { id: 11, name: "Pegions", src: "https://dqjr4ju5r15in.cloudfront.net/pegions.mp4" },
    { id: 12, name: "Peace", src: "https://dqjr4ju5r15in.cloudfront.net/walk.mp4" }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleShare = (src) => {
    navigator.clipboard.writeText(src); // Copy video URL to clipboard
    alert("Video link copied!");
  };

  const filteredVideos = videos.filter((video) =>
    video.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <div className="background"></div> {/* Background */}
      <div className="content">
        <h1>Welcome to video streaming platform</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search videos..." value={searchTerm} onChange={handleSearch} />
        </div>
        <div className="videos-container">
          {filteredVideos.map((video) => (
            <div className="video-wrapper" key={video.id}>
              <video width="500px" height="300px" controls>
                <source src={video.src} type="video/mp4" />
              </video>
              <div className="video-info">
                <p>{video.name}</p>
                <button className="share-button" onClick={() => handleShare(video.src)}>Share</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;