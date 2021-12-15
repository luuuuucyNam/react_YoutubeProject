import React from "react";

const VideoList = ({ videoList }) => {
  return (
    <div className="select-video-list-container">
      {videoList?.map((item, key) => {
        return <VideoItem video={item} key={key} />;
      })}
    </div>
  );
};

const VideoItem = ({ video }) => {
  return (
    <div className="select-video-item">
      <img
        className="select-video-img"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <span className="select-video-title">{video.snippet.title}</span>
    </div>
  );
};

const SelectedVideo = (props) => {
  const { video, videoList } = props;
  return (
    <div className="selected-video-container">
      <div className="selected-video-player">
        <iframe
          src={`https://www.youtube.com/embed/${
            video?.id?.videoId || video?.id
          }?autoplay=1&mute=1 `}
          title={video.snippet.title}
          frameBorder="0"
          allowFullScreen
        />
        <span className="video-player-title">{video.snippet.title}</span>
      </div>
      <div className="selected-video-list-container">
        <VideoList videoList={videoList} />
      </div>
    </div>
  );
};

export default SelectedVideo;
