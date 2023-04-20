export interface Result<T> {
  readonly payload: T;
  readonly brokenRules?: { [key: string]: string } | string;
  readonly debugPayload?: any;
}

export interface WeatherLocationModel {
  readonly city: string;
  readonly region: string;
  readonly country: string;
  readonly lat: number;
  readonly lon: number;
}

export interface WeatherCurrentModel {
  readonly tempC: number;
  readonly humidity: number;
  readonly windKph: number;
  readonly precipMm: number;
}

export interface WeatherForecastModel {
  readonly forecastday: WeatherForecastDayModel[];
}

export interface WeatherForecastDayModel {
  readonly date: Date;
}

export interface WeatherAboutCityModel {
  readonly location: WeatherLocationModel;
  readonly current: WeatherCurrentModel;
  readonly forecast: WeatherForecastModel;
}
