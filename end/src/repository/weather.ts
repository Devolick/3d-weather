import axios from "axios";
import { env } from "../env";
import { Repository } from "./repository";
import {
  Result,
  WeatherAboutCityModel,
  WeatherForecastDayModel,
  WeatherForecastModel,
} from "./default";

const { apiKey, apiUrl: weatherApi } = env;

export class WeatherRespository extends Repository {
  getAboutCity(
    country: string,
    city: string
  ): Promise<Result<WeatherAboutCityModel>> {
    return axios
      .get(`${weatherApi}/forecast.json`, {
        params: {
          key: apiKey,
          q: `${country},${city}`,
          days: 7,
          aqi: "no",
        },
      })
      .then((res) => {
        const payload: WeatherAboutCityModel = {
          location: {
            region: res.data.location.region,
            country: res.data.location.country,
            city: res.data.location.name,
            lat: res.data.location.lat,
            lon: res.data.location.lon,
          },
          current: {
            tempC: res.data.current.temp_c,
            humidity: res.data.current.humidity,
            precipMm: res.data.current.precip_mm,
            windKph: res.data.current.wind_kph,
          },
          forecast: {
            forecastday: res.data.forecast.forecastday.map(
              (cast: any) =>
                ({
                  date: cast.date,
                } as WeatherForecastDayModel)
            ),
          } as WeatherForecastModel,
        };
        const response: Result<WeatherAboutCityModel> = {
          payload,
          debugPayload: res.data,
        };

        return response;
      });
  }
}
