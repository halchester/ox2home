import React, { useState } from "react";
//@ts-ignore
import MapGL from "react-map-gl";
import PopupBox from "src/components/popup/Popup";
import MarkerPoint from "src/components/marker/Marker";
import MapControl from "src/components/mapControl/MapControl";

import "mapbox-gl/dist/mapbox-gl.css";
import "./map.css";

const Map: React.FC = () => {
  const [activePoint, setActivePoint] = useState<PointProps | any>(null);
  const [viewport, setViewport] = useState<any>({
    latitude: 16.805312353924744,
    longitude: 96.15919476831377,
    width: window.innerWidth,
    height: window.innerHeight,
    zoom: 12,
  });

  // Demo data
  const coordinates: PointProps[] = [
    {
      title: "Private Oxygen Donation",
      address: "၆၀၁/က၊ အသက ၂၀ လမ်း၊ ၁၀ ရပ်ကွက်၊ တောင်ဥက္ကလာပ၊ ရန်ကုန်",
      numbers: ["0973008409"],
      latitude: 16.8497468,
      longitude: 96.1871037,
    },
    {
      title: "အောက်ဆီဂျင်အလှူအဖွဲ့",
      address: "၈/၁၊ ဓမ္မရာဇာလမ်း၊ ၁၀ ရပ်ကွက်၊ တောင်ဥက္ကလာပ၊ ရန်ကုန်",
      numbers: ["095072781", "09420000564", "09979613961"],
      latitude: 16.8468136,
      longitude: 96.1826143,
    },
    {
      title: "အေးချမ်းမေတ္တာ လူမှုကူညီရေးအသင်း",
      address: "အင်းစိန်မြို့နယ်",
      numbers: ["091234567"],
      latitude: 16.895558,
      longitude: 96.107712,
    },
    {
      title: "တကောင်း အောက်ဆီဂျင်",
      address: "၄၆၄၊ တကောင်း ၈ လမ်း၊ ၅ ရပ်ကွက်၊ တောင်ဥက္ကလာပ၊ ရန်ကုန်",
      numbers: ["091234567"],
      latitude: 16.848084,
      longitude: 96.229935,
    },
    {
      title: "ဒီဃာယု",
      address:
        "ဇောတရုံလမ်း၊ မာန်ပြေလမ်းထောင့်၊ ၂ (တောင်) ရပ်ကွက်၊ သာကေတ၊ ရန်ကုန်",
      numbers: ["091234567"],
      latitude: 16.791065,
      longitude: 96.196461,
    },
    {
      title: "ဂရုဏာရောင်ခြည် အောက်ဆီဂျင်အဖွဲ့",
      address:
        "မန္တလေးလမ်း၊ ပိန္နဲကုန်းကျောင်းတိုက်၊ ကန်တော်လေး(တောင်)ရပ်ကွက်၊ မင်္ဂလာတောင်ညွန့်၊ ရန်ကုန်",
      numbers: ["091234567", "091234523", "09123244"],
      latitude: 16.826724,
      longitude: 96.134319,
    },
  ];

  const onClickOnMarker = (e: any, item: any) => {
    e.preventDefault();
    setActivePoint(item);
  };

  return (
    <React.Fragment>
      <MapGL
        style={{ width: window.innerWidth, height: window.innerHeight }}
        mapStyle="mapbox://styles/r4y/ckqy4djcy3pam17qu6nc59gy4"
        latitude={viewport.latitude}
        mapboxApiAccessToken="pk.eyJ1IjoicjR5IiwiYSI6ImNrcXdpODBzZTA3cWIyd254NTh0enRwYmQifQ.iuxe077CeSSr0T-lnacRGQ"
        longitude={viewport.longitude}
        zoom={viewport.zoom}
        onViewportChange={(viewport: any) => {
          setViewport(viewport);
        }}
      >
        <MapControl />

        {/* This component is used to render all o2 available services location in map */}
        {coordinates.map((item: PointProps, i: number) => (
          <MarkerPoint item={item} key={i} onClickOnMarker={onClickOnMarker} />
        ))}

        {/* This component is used to show description of selected point in map */}
        {activePoint && (
          <PopupBox activePoint={activePoint} setActivePoint={setActivePoint} />
        )}
      </MapGL>
    </React.Fragment>
  );
};

export default Map;
