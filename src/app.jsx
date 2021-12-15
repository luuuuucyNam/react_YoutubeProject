import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./app.css";
import SearchHeader from "./components/searchHeader";
import SelectedVideo from "./components/selectedVideo";
import VideoList from "./components/videoList";
import DetailPage from "./features/detailPage";
import HomePage from "./features/homePage";
import {
  fetchMostPopularVideoList,
  fetchSearchVideoList,
} from "./service/youtubeAPI";
function App() {
  const [isVideoListLoading, setVideoListLoading] = useState(false);
  const [videoList, setVideoList] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (searchText) => {
    navigate("/");
    searchVideoList(searchText);
  };

  const handleMain = () => {
    navigate("/");
    getVideoList();
  };

  const getVideoList = async () => {
    try {
      setVideoListLoading(true);
      const response = await fetchMostPopularVideoList();
      setVideoList(response.data.items);
      setVideoListLoading(false);
    } catch (error) {
      setVideoListLoading(false);
      setVideoList([]);
    }
  };

  const searchVideoList = async (searchText) => {
    try {
      setVideoListLoading(true);
      const response = await fetchSearchVideoList(searchText);
      setVideoList(response.data.items);
      setVideoListLoading(false);
    } catch (error) {
      setVideoListLoading(false);
      setVideoList([]);
    }
  };

  useEffect(() => {
    getVideoList();
  }, []);

  return (
    <div className="App">
      <SearchHeader onSearch={handleSearch} onMain={handleMain} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              videoList={videoList}
              isVideoListLoading={isVideoListLoading}
            />
          }
        />
        <Route
          path="/video/:id"
          element={<DetailPage videoList={videoList} />}
        />
      </Routes>
      {/* <Route path="/about" component={About} /> */}
    </div>
  );
}

export default App;

// header => onSearch(), result
// if selectId O => detail / X => video list ?????
// video list => (props=> result (videolist)) => main, search result
// detail => click videoitem and video list
