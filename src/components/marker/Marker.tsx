import React from "react";
//@ts-ignore
import { Marker } from "react-map-gl";

const MarkerPoint: React.FC<MarkerProps> = ({ item, onClickOnMarker }) => {
  return (
    <Marker latitude={item.latitude} longitude={item.longitude}>
      <button className="marker-btn" onClick={(e) => onClickOnMarker(e, item)}>
        <img
          src="/assets/images/o2-icon.png"
          alt="o2-icon"
          style={{
            width: 30,
            height: 30,
          }}
        />
      </button>
    </Marker>
  );
};

export default MarkerPoint;
