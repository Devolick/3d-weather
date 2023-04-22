import { CSSProperties } from "react";
import "./SkyStars.scss";

interface Props {
  readonly style?: CSSProperties;
}

function SkyStars(props: Props) {
  return (
    <div className="sky-stars" style={props.style}>
      <div className="sky-stars__container">
        <div className="sky-stars__sky">
          <div className="sky-stars_star"></div>
          <div className="sky-stars_star-2"></div>
          <div className="sky-stars_star-3"></div>
          <div className="sky-stars_comet"></div>
        </div>
      </div>
    </div>
  );
}

export default SkyStars;
