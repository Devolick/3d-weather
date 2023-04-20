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
  }, []);

  return (
    <Col
      className="flex flex-col"
      style={{
        background:
          "linear-gradient(315deg, rgba(59,55,130,1) 0%, rgba(9,9,121,1) 20%, rgba(0,212,255,1) 100%)",
      }}
      flex={1}
    >
      <Row className="p-8">
        <Col>
          <Text className="text-6xl text-white opacity-90">
            {[
              aboutCity?.location.country,
              aboutCity?.location.region,
              aboutCity?.location.city,
            ].join(",")}
          </Text>
        </Col>
        <Col flex={1}></Col>
        <Col>
          <Text className="text-8xl text-white opacity-90">
            {(aboutCity?.current.tempC ?? 0) > 0 ? "+" : "-"}
            {aboutCity?.current.tempC} C
          </Text>
        </Col>
      </Row>
      <Row className="p-8">
        <Col>
          <Col className="pb-6 opacity-90">
            <Row className="pb-2">
              <Text className="text-5xl text-white">
                {dateTime.format("dddd")}
              </Text>
            </Row>
            <Row>
              <Text className="text-3xl text-white">
                {dateTime.format("DD, MMM YYYY")}
              </Text>
            </Row>
          </Col>
          <Row className="pb-2 opacity-70">
            <RainyIcon className="mr-2 fill-white" />{" "}
            <Text className="text-4xl text-white">
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
        <Col flex={1}></Col>
      </Row>
      <Col className="flex" flex={1}></Col>
      <Row className="p-6 h-80">
        {aboutCity &&
          aboutCity.forecast.forecastday.map((cast, index) => (
            <DayCard key={index} date={moment(cast.date)} />
          ))}
      </Row>
    </Col>
  );
}

export default Weather;
