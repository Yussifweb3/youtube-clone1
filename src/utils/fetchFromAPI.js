import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "./utils/api";

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await fetchFromAPI("search?part=snippet&q=reactjs");
        setVideos(data.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h1>YouTube Clone</h1>
      {videos.map((video) => (
        <div key={video.id.videoId}>
          <h2>{video.snippet.title}</h2>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default App;
