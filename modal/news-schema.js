import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  source: {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  author: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
    unique: true,
  },
  urlToImage: {
    type: String,
  },
  publishedAt: {
    type: String,
  },
  content: {
    type: String,
  },
});

const news = mongoose.model("news", newsSchema);
export default news;
