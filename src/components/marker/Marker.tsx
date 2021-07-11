import React from "react";
//@ts-ignore
import { Marker } from "react-map-gl";
import "./marker.css";

const MarkerPoint: React.FC<MarkerProps> = ({ item, onClickOnMarker }) => {
  return (
    <Marker latitude={item.latitude} longitude={item.longitude}>
      <button className="marker-btn" onClick={(e) => onClickOnMarker(e, item)}>
        <div className="circle" />
      </button>
    </Marker>
  );
};

export default MarkerPoint;
