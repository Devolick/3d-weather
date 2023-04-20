import axios from "axios";
import { env } from "../env";
import { Result, WeatherAboutCityModel } from "./defaul";

const { apiUrl: api } = env;

export function getWeatherAboutCity(
  country: string,
  city: string
): Promise<Result<WeatherAboutCityModel>> {
  return axios
    .get<Result<WeatherAboutCityModel>>(`${api}/weather/about`, {
      params: {
        country,
        city,
      },
    })
    .then((res) => {
      return res.data;
    });
}
