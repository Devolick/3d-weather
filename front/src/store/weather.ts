import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState, ThunkStatusType } from "./store";
import { getWeatherAboutCity } from "../repository/weather";
import { Result, WeatherAboutCityModel } from "../repository/defaul";

export interface WeatherState {
  aboutCity: WeatherAboutCityModel | null;
  status: ThunkStatusType;
}

const initialState: WeatherState = {
  aboutCity: null,
  status: "idle",
};

export const weatherAboutCityAsync = createAsyncThunk<
  Result<WeatherAboutCityModel>,
  { country: string; city: string }
>("weather/aboutCity", async ({ country, city }) => {
  const response = await getWeatherAboutCity(country, city);
  return response;
});

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    // reduceMe: (state) => {
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(weatherAboutCityAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(weatherAboutCityAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.aboutCity = action.payload.payload;
      })
      .addCase(weatherAboutCityAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {} = weatherSlice.actions;

export const selectWeatherAboutCity = (state: RootState) =>
  state.weather.aboutCity;

export default weatherSlice.reducer;
