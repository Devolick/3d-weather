import { Col, Row } from "antd";
import "./Weather.scss";
import AirIcon from "./../assets/svg/air_FILL0_wght400_GRAD0_opsz48.svg";
import HuminityIcon from "./../assets/svg/humidity_low_FILL0_wght400_GRAD0_opsz48.svg";
import RainyIcon from "./../assets/svg/rainy_FILL0_wght400_GRAD0_opsz48.svg";

// https://www.cgtrader.com/3d-models/exterior/other/3d-icon-weather-pack

function Weather() {
  return (
    <Col flex={1}>
      <Row>
        <Col>
          <span>City</span>
        </Col>
        <Col flex={1}></Col>
        <Col>+ 20 C</Col>
      </Row>
      <Row>
        <Col>
          <Row>Monday</Row>
          <Row>
            <img src={RainyIcon} alt="React Logo" /> 49%
          </Row>
          <Row>
            <img src={HuminityIcon} alt="React Logo" /> 47%
          </Row>
          <Row>
            <img src={AirIcon} alt="React Logo" /> 16 km/h
          </Row>
        </Col>
        <Col flex={1}></Col>
      </Row>
      {/* <Row>
        <Row>
          <SmileOutlined />
          19 C
          <Col>
            <Row>Precipitation: 49%</Row>
            <Row>Humidity: 47%</Row>
            <Row>Wind: 16 km/h</Row>
          </Col>
        </Row>
      </Row> */}
    </Col>
  );
}

export default Weather;
