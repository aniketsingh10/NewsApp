import axios from "axios";

export const getNews = async () => {
  const URL = "https://news-server-tqwo.onrender.com";
  try {
    return await axios.get(`${URL}/news`);
  } catch (error) {
    console.log("error while calling new api", error);
  }
};
