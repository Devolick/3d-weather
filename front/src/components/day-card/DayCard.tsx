import { Card, Col, Row, Typography } from "antd";
import Scene from "../scene/Scene";
import { Moment } from "moment";
import { CSSProperties } from "react";

const { Text } = Typography;

interface Props {
  readonly style?: CSSProperties;
  readonly className?: string;
  readonly model: string;
  readonly date: Moment;
  readonly minTempC: number;
  readonly maxTempC: number;
}

function DayCard(props: Props) {
  return (
    <Card
      style={props.style}
      className={`flex flex-col border-0 m-2 bg-white/20 ${
        props.className || ""
      }`}
      bodyStyle={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Col
        className="flex flex-col flex-auto w-32 sm:w-48 md:w-48 lg:flex-1"
        flex={1}
      >
        <Col className="flex flex-col flex-auto" flex={1}>
          <Scene models={[props.model]} />
        </Col>
        <Row>
          <Text className="text-sky-300 text-lg">
            {props.date.format("dddd").toUpperCase()}
          </Text>
        </Row>
        <Row>
          <Text className="text-white mr-2">
            {" "}
            {(props.maxTempC ?? 0) > 0 ? "+" : ""}
            {props.maxTempC} C
          </Text>
          <Text className="text-slate-300">
            {" "}
            {(props.minTempC ?? 0) > 0 ? "+" : ""}
            {props.minTempC} C
          </Text>
        </Row>
      </Col>
    </Card>
  );
}

export default DayCard;
