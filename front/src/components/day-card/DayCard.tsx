import { Card, Col, Row, Typography } from "antd";
import Scene from "../scene/Scene";
import { Moment } from "moment";

const { Text } = Typography;

interface Props {
  readonly date: Moment;
}

function DayCard(props: Props) {
  return (
    <Card
      className="flex flex-col flex-auto border-0 m-2 max-w-xs bg-white/20"
      bodyStyle={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Col className="flex flex-col flex-auto" flex={1}>
        <Col className="flex flex-col flex-auto" flex={1}>
          <Scene />
        </Col>
        <Row>
          <Text className="text-sky-300 text-xl">
            {props.date.format("ddd").toUpperCase()}
          </Text>
        </Row>
        <Row>
          <Text className="text-white">+ 25 C</Text>
        </Row>
      </Col>
    </Card>
  );
}

export default DayCard;
