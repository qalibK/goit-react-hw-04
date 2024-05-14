import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const API_KEY = "xEGb-OWMHLWa7eVf93i5LolhkKfrCyG39YhCUi0oCxg";

export const fetchPhotos = async (searchQuery, currentPage) => {
  const response = await axios.get("/photos/random/", {
    params: {
      query: searchQuery,
      count: 12,
      page: currentPage,
      client_id: API_KEY,
    },
  });
  return response.data;
};
