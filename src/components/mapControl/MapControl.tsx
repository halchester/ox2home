import React from "react";
import { Select } from "@chakra-ui/react";
import { regions } from "./regions";
import "./map-control.css";

/**
 * This component is used to select the region.
 * Existed at top bar.
 */
const MapControl: React.FC = () => {
  return (
    <div className="region-select">
      <Select boxShadow="lg" >
        {regions &&
          regions.map((region, i) => (
            <option key={i} value={region.value}>
              {region.name}
            </option>
          ))}
        <option value="not-available" disabled>
          Not yet available for other regions.
        </option>
      </Select>
    </div>
  );
};

export default MapControl;
