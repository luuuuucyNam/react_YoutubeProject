import { useNavigate } from "react-router-dom";
import "../app.css";
import VideoList from "../components/videoList";
function HomePage({ videoList, isVideoListLoading }) {
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`/video/${item?.id?.videoId || item?.id}`);
  };

  return (
    <div className="home-page">
      {/* <SearchHeader onSearch={handleSearch} onMain={handleMain} />
      {selected ? (
        <SelectedVideo video={selected} videoList={videoList} />
      ) : !isVideoListLoading ? (
        <VideoList videoList={videoList} onClick={handleClick} />
      ) : (
        <div className="loading-title">Loading ...</div>
      )} */}
      {!isVideoListLoading ? (
        <VideoList videoList={videoList} onClick={handleClick} />
      ) : (
        <div className="loading-title">Loading ...</div>
      )}
    </div>
  );
}

export default HomePage;

// header => onSearch(), result
// if selectId O => detail / X => video list ?????
// video list => (props=> result (videolist)) => main, search result
// detail => click videoitem and video list
