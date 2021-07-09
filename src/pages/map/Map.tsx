import React from "react";
import ReactMapboxGl, { Layer, Feature, Popup } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map: React.FC = () => {
  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoicjR5IiwiYSI6ImNrcXdpODBzZTA3cWIyd254NTh0enRwYmQifQ.iuxe077CeSSr0T-lnacRGQ",
    minZoom: 12,
  });

  return (
    <Map
      style="mapbox://styles/r4y/ckqwj80df7uwd18o0ugmtse4k"
      containerStyle={{
        width: window.innerWidth,
        height: window.innerHeight,
      }}
      center={[96.15919476831377, 16.805312353924744]}
    >
      <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[96.15919476831377, 16.805312353924744]} />
      </Layer>

      <Popup
        coordinates={[-0.13235092163085938, 51.518250335096376]}
        offset={{
          "bottom-left": [12, -38],
          bottom: [0, -38],
          "bottom-right": [-12, -38],
        }}
      >
        <h1>Popup</h1>
      </Popup>
    </Map>
  );
};

export default Map;
