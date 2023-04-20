import axios from "axios";
import { config } from "../config";
import { Repository } from "./repository";
import { Response, WeatherAboutResponse } from "./default";

const { apiKey, weatherApi } = config;

export class WeatherRespository extends Repository {
  getAboutCity(
    country: string,
    city: string
  ): Promise<Response<WeatherAboutResponse>> {
    return axios
      .get(`${weatherApi}/current.json`, {
        params: {
          key: apiKey,
          q: `${country},${city}`,
          aqi: "no",
        },
      })
      .then((res) => {
        const payload: WeatherAboutResponse = {
          location: {
            region: res.data.location.region,
            country: res.data.location.country,
            city: res.data.location.name,
            lat: res.data.location.lat,
            lon: res.data.location.lon,
            localtime: res.data.location.localtime,
          },
        };
        const response: Response<WeatherAboutResponse> = {
          payload,
          debugPayload: res.data,
        };

        return response;
      });
  }
}
