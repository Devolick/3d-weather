export interface Response<T> {
  readonly payload: T;
  readonly brokenRules?: { [key: string]: string } | string;
  readonly debugPayload?: any;
}

export interface WeatherAboutResponse {
  readonly location: {
    readonly city: string;
    readonly region: string;
    readonly country: string;
    readonly lat: number;
    readonly lon: number;
    readonly localtime: Date;
  };
}
