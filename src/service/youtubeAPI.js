import axios from "axios";

const API_ADDRESS = "https://youtube.googleapis.com/youtube/v3";
const API_KEY = "AIzaSyBCm9hMk69GNeKEj1BzmoBWa3X08j0S9S0";

export const fetchSearchVideoList = async (search) => {
  try {
    const response = await axios({
      method: "get",
      url: `${API_ADDRESS}/search?key=${API_KEY}&part=snippet&maxResults=25&q=${search}`,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const fetchMostPopularVideoList = async () => {
  try {
    const response = await axios({
      method: "get",
      url: `${API_ADDRESS}/videos?key=${API_KEY}&part=snippet&maxResults=25&chart=mostPopular`,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
