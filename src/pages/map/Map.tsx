import React, { useState } from "react";
//@ts-ignore
import MapGL from "react-map-gl";
import PopupBox from "src/components/popup/Popup";
import "mapbox-gl/dist/mapbox-gl.css";
import "./map.css";
import MarkerPoint from "src/components/marker/Marker";

const Map: React.FC = () => {
  const [activePoint, setActivePoint] = useState<PointProps | any>(null);
  const [viewport, setViewport] = useState<any>({
    latitude: 16.805312353924744,
    longitude: 96.15919476831377,
    width: window.innerWidth,
    height: window.innerHeight,
    zoom: 13,
  });

  // Demo data
  const coordinates: PointProps[] = [
    {
      title: "ဗြဟ္မစိုရ်မိုး",
      address: "ပုသိမ်ညွန့်ရပ်ကွက်၊ တာမွေ၊ ရန်ကုန်",
      numbers: ["091234567", "091234523", "09123244"],
      latitude: 16.788806,
      longitude: 96.167965,
    },
    {
      title: "မင်္ဂလာ",
      address: "မင်္ဂလာ သိဒ္ဓိလမ်း၊ ဦးချစ်မောင်လမ်းဒေါင့်၊ မင်းလမ်းမှတ်တိုင်၊ ဆရာစံ(တောင်)ရပ်ကွက်၊ ဗဟန်း၊ ရန်ကုန်",
      numbers: ["091234567", "091234523", "09123244"],
      latitude: 16.819587,
      longitude: 96.164923,
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
    {
      title: "အေးစေတနာ",
      address: "၄၂၈၊ ရွှေအင်းဝလမ်း၊ ၅၅ ရပ်ကွက်၊ တောင်ဒဂုံ၊ ရန်ကုန်",
      numbers: ["091234567", "091234523", "09123244"],
      latitude: 16.844634,
      longitude: 96.176205,
    },
  ];

  const onClickOnMarker = (e: any, item: any) => {
    e.preventDefault();
    setActivePoint(item);
  };

  return (
    <MapGL
      style={{ width: window.innerWidth, height: window.innerHeight }}
      mapStyle="mapbox://styles/r4y/ckqwj80df7uwd18o0ugmtse4k"
      latitude={viewport.latitude}
      mapboxApiAccessToken="pk.eyJ1IjoicjR5IiwiYSI6ImNrcXdpODBzZTA3cWIyd254NTh0enRwYmQifQ.iuxe077CeSSr0T-lnacRGQ"
      longitude={viewport.longitude}
      zoom={viewport.zoom}
      onViewportChange={(viewport: any) => {
        setViewport(viewport);
      }}
    >
      {coordinates.map((item: PointProps, i: number) => (
        <MarkerPoint item={item} key={i} onClickOnMarker={onClickOnMarker} />
      ))}

      {activePoint && (
        <PopupBox activePoint={activePoint} setActivePoint={setActivePoint} />
      )}
    </MapGL>
  );
};

export default Map;
