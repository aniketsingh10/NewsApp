import { data } from "./constants/data.js";
import News from "./modal/news-schema.js";

const DefaultData = async () => {
  try {
    await News.insertMany(data);
    console.log("Data imported successful");
  } catch (error) {
    console.log("Error", error.message);
  }
};

export default DefaultData;
