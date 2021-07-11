import React from "react";
//@ts-ignore
import { Popup } from "react-map-gl";
import { Heading, Text, Grid, GridItem, IconButton } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

import "./popup.css";

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
      <Text fontSize="md" mb="2">
        {activePoint.address}
      </Text>
      {activePoint.numbers.map((num: string, i: number) => (
        <Grid templateColumns="repeat(3, 1fr)" gap={4} mb={2}>
          <GridItem colSpan={2} alignSelf="center">
            <Text fontSize="md">{num}</Text>
          </GridItem>
          <GridItem colStart={4} h="10">
            <IconButton
              colorScheme="teal"
              aria-label="Call Service"
              size="sm"
              isRound
              onClick={() => window.open(`tel:${num}`)}
              icon={<PhoneIcon />}
            />
          </GridItem>
        </Grid>
      ))}
    </Popup>
  );
};

export default PopupBox;
