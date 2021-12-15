import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const VideoList = ({ videoList, onClick }) => {
  return (
    <div className="select-video-list-container">
      {videoList?.map((item, key) => {
        return <VideoItem video={item} key={key} onClick={onClick} />;
      })}
    </div>
  );
};

const VideoItem = ({ video, onClick }) => {
  const handleClick = (video) => {
    onClick(video);
  };
  return (
    <div className="select-video-item" onClick={() => handleClick(video)}>
      <img
        className="select-video-img"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <span className="select-video-title">{video.snippet.title}</span>
    </div>
  );
};

const DetailPage = (props) => {
  const { videoList } = props;
  const [video, setVideo] = useState(null);
  let { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    setVideo(videoList.filter((f) => f?.id?.videoId || f?.id === id)[0]);
  }, [id]);

  const handleClick = (item) => {
    navigate(`/video/${item?.id?.videoId || item?.id}`);
  };

  return (
    <div className="selected-video-container">
      <div className="selected-video-player">
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1 `}
          title={video?.snippet?.title}
          frameBorder="0"
          allowFullScreen
        />
        <span className="video-player-title">{video?.snippet?.title}</span>
      </div>
      <div className="selected-video-list-container">
        <VideoList videoList={videoList} onClick={handleClick} />
      </div>
    </div>
  );
};

export default DetailPage;
