import { Card, Col, Row, Typography } from "antd";
import "./Weather.scss";
import { ReactComponent as AirIcon } from "./../assets/svg/air_FILL0_wght400_GRAD0_opsz48.svg";
import { ReactComponent as HuminityIcon } from "./../assets/svg/humidity_low_FILL0_wght400_GRAD0_opsz48.svg";
import { ReactComponent as RainyIcon } from "./../assets/svg/rainy_FILL0_wght400_GRAD0_opsz48.svg";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  selectWeatherAboutCity,
  weatherAboutCityAsync,
} from "../store/weather";
import { useEffect, useState } from "react";
import DayCard from "../components/day-card/DayCard";
import moment from "moment";
import windObj from "../assets/models/wind.obj";
import sun from "../assets/models/1.obj";
import SkyStars from "../components/sky-stars/SkyStars";
console.log(windObj);

const { Text } = Typography;

// https://www.cgtrader.com/3d-models/exterior/other/3d-icon-weather-pack
// https://tailwindcss.com/docs

interface Props {}

function Weather(props: Props) {
  const dispatch = useAppDispatch();
  const aboutCity = useAppSelector(selectWeatherAboutCity);
  const [dateTime, setDateTime] = useState(moment());

  useEffect(() => {
    dispatch(
      weatherAboutCityAsync({
        country: "Greece",
        city: "Athens",
      })
    );
    const updateTime = setInterval(() => setDateTime(moment()), 1000);
    const updateWeather = setInterval(() => {
      dispatch(
        weatherAboutCityAsync({
          country: "Greece",
          city: "Athens",
        })
      );
    }, 1000 * 60 * 30);
    return () => {
      clearInterval(updateTime);
      clearInterval(updateWeather);
    };
  }, []);

  function createSkyGradient(): string {
    return `linear-gradient(315deg, rgba(59,55,130,1) 0%, rgba(9,9,121,1) ${
      [
        ...Array(6).fill(0),
        ...Array(18)
          .fill(0)
          .map((v, i) => i * 5.5),
        ...Array(2).fill(0),
      ][Number(dateTime.format("H"))]
    }%, rgba(0,212,255,1) 100%)`;
  }

  function createSkyStarsOpacity() {
    return {
      0: 60,
      1: 100,
      2: 100,
      3: 100,
      4: 30,
      5: 10,
      22: 10,
      23: 30,
    }[Number(dateTime.format("H"))];
  }

  return (
    <Col
      className="flex flex-col"
      style={{
        background: createSkyGradient(),
      }}
      flex={1}
    >
      <SkyStars style={{ opacity: createSkyStarsOpacity() ?? 0 }} />
      <Row className="p-8">
        <Col>
          <Text className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white opacity-90 pr-2">
            {[
              aboutCity?.location.country,
              aboutCity?.location.region,
              aboutCity?.location.city,
            ].join(",")}
          </Text>
        </Col>
        <Col flex={1}></Col>
        <Col>
          <Text className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white opacity-90">
            {(aboutCity?.current.tempC ?? 0) > 0 ? "+" : ""}
            {aboutCity?.current.tempC} C
          </Text>
        </Col>
      </Row>
      <div className="flex-1"></div>
      <Row className="p-8">
        <Col>
          <Col className="pb-6 opacity-90">
            <Row className="pb-2">
              <Text className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
                {dateTime.format("dddd")}
              </Text>
            </Row>
            <Row>
              <Text className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
                {dateTime.format("DD, MMM YYYY")}
              </Text>
            </Row>
            <Row>
              <Text className="text-2xl lg:text-3xl text-white">
                {dateTime.format("h:m:ss a")}
              </Text>
            </Row>
          </Col>
          <Row className="pb-2 opacity-70 items-center">
            <RainyIcon className="mr-2 fill-white h-8 sm:h-10 md:h-14 lg:h-20" />{" "}
            <Text className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
              {aboutCity?.current.precipMm} mm
            </Text>
          </Row>
          <Row className="pb-2 opacity-70">
            <HuminityIcon className="mr-2 fill-white" />{" "}
            <Text className="text-4xl text-white">
              {aboutCity?.current.humidity} %
            </Text>
          </Row>
          <Row className="pb-2 opacity-70">
            <AirIcon className="mr-2 fill-white" />{" "}
            <Text className="text-4xl text-white">
              {aboutCity?.current.windKph} km/h
            </Text>
          </Row>
        </Col>
      </Row>
      <div className="flex-1"></div>
      <Row className="p-6 h-80 flex flex-row flex-nowrap overflow-y-hidden overflow-x-auto">
        <div className="flex-1"></div>
        {aboutCity &&
          aboutCity.forecast.forecastday.map((cast, index) => (
            <DayCard
              key={index}
              model={windObj}
              date={moment(cast.date)}
              minTempC={cast.day.mintempC}
              maxTempC={cast.day.maxtempC}
            />
          ))}
        <div className="flex-1"></div>
      </Row>
    </Col>
  );
}

export default Weather;
