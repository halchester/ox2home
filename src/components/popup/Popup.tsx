import React from "react";
import { Popup } from "react-map-gl";
import { Heading, Text } from "@chakra-ui/react";

const PopupBox: React.FC<PopupProps> = ({ activePoint, setActivePoint }) => {
  return (
    <Popup
      latitude={activePoint.latitude}
      longitude={activePoint.longitude}
      className="popup"
      closeOnClick={false}
      onClose={() => {
        setActivePoint(null);
      }}
    >
      <Heading as="h5" size="sm" mb="3">
        {activePoint.title}
      </Heading>
      <Text fontSize="md" mb="2">{activePoint.address}</Text>
      {activePoint.numbers.map((num: string, i: number) => (
        <span key={i}>
          {num}
          <br />
        </span>
      ))}
    </Popup>
  );
};

export default PopupBox;
