import express from "express";
import { WeatherRespository } from "../repository/weather";

const router = express.Router();

router.get("/:country", async (req, res) => {
  const weatherRespository = new WeatherRespository();
  const country = req.params.country;
  const city = req.query.city as string;
  const response = await weatherRespository.getAboutCity(country, city);
  res.status(200).json(response);
});

export default router;
