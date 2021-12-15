import React from "react";

const VideoItem = (props) => {
  const { video, onClick } = props;
  const handleClick = (video) => {
    onClick(video);
  };
  return (
    <div className="video-item" onClick={() => handleClick(video)}>
      <img
        className="video-img"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <span className="video-title">{video.snippet.title}</span>
    </div>
  );
};
export default VideoItem;
