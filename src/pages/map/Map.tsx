import React, { useState } from "react";
//@ts-ignore
import MapGL from "react-map-gl";

// Components
import PopupBox from "src/components/popup/Popup";
import MarkerPoint from "src/components/marker/Marker";
import MapControl from "src/components/mapControl/MapControl";
import AboutFabButton from "src/components/about/AboutFabButton";
import InfoDrawer from "src/components/drawer/InfoDrawer";

// Chakra components
import { useDisclosure } from "@chakra-ui/react";

// API & stores
import { useFetchActiveMarkers } from "src/hooks/useMarkers";

import "mapbox-gl/dist/mapbox-gl.css";
import "./map.css";

const Map: React.FC = () => {
  const btnInfoDrawerRef = React.useRef<HTMLButtonElement>();
  const {
    isOpen: isOpenInfoDrawer,
    onOpen: onOpenInfoDrawer,
    onClose: onCloseInfoDrawer,
  }: any = useDisclosure();
  const [activePoint, setActivePoint] = useState<PointProps | any>(null);
  const [viewport, setViewport] = useState<any>({
    latitude: 16.805312353924744,
    longitude: 96.15919476831377,
    zoom: 12,
  });

  const { data, error }: any = useFetchActiveMarkers();
  console.log("data", data);
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
      {/* This component is used to see the information of this map */}

      <InfoDrawer
        isOpenInfoDrawer={isOpenInfoDrawer}
        onCloseInfoDrawer={onCloseInfoDrawer}
        btnRef={btnInfoDrawerRef}
      />
      <MapGL
        style={{ width: window.innerWidth, height: window.innerHeight }}
        mapStyle="mapbox://styles/r4y/ckqy4djcy3pam17qu6nc59gy4"
        latitude={viewport.latitude}
        mapboxApiAccessToken={process.env.REACT_APP_MAP_ACCESS_TOKEN}
        longitude={viewport.longitude}
        zoom={viewport.zoom}
        onViewportChange={(viewport: any) => {
          setViewport(viewport);
        }}
      >
        {/* This component is used to change the regions of the map */}
        <MapControl />

        {/* This component is used to render all o2 available services location in map */}
        {coordinates.map((item: PointProps, i: number) => (
          <MarkerPoint item={item} key={i} onClickOnMarker={onClickOnMarker} />
        ))}

        {/* This component is used to show description of selected point in map */}
        {activePoint && (
          <PopupBox activePoint={activePoint} setActivePoint={setActivePoint} />
        )}

        {/* This component is used to see the information of this map */}
        <AboutFabButton
          btnRef={btnInfoDrawerRef}
          onOpenInfoDrawer={onOpenInfoDrawer}
        />
      </MapGL>
    </React.Fragment>
  );
};

export default Map;
