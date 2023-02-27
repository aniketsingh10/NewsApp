import express from "express";
import { getNews } from "../controller/news-contoller.js";
const Route = express.Router();

Route.get("/news",getNews);

export default Route;
