import React from "react";
import VideoItem from "./videoItem";

const VideoList = (props) => {
  const { videoList, onClick } = props;
  return (
    <div className="video-list-container">
      {videoList?.map((item, key) => {
        return <VideoItem video={item} key={key} onClick={onClick} />;
      })}
    </div>
  );
};
export default VideoList;
