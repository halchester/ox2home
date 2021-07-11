import React from "react";
import { Select } from "@chakra-ui/react";
import './map-control.css';

/**
 * This component is used to select the region.
 * Existed at top bar.
 */
const MapControl: React.FC = () => {
  return (
    <div className="region-select">
      <Select placeholder="Select option">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </div>
  );
};

export default MapControl;
