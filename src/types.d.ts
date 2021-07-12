interface PointProps {
  title: string;
  address: string;
  phoneNumbers: string[];
  latitude: number;
  longitude: number;
}

interface PopupProps {
  activePoint: PointProps;
  setActivePoint: (arg0: any) => void;
}

interface MarkerProps {
  item: PointProps;
  onClickOnMarker: (any, PointProps) => void;
}

interface AboutFabButtonProps {
  btnRef: HTMLButtonElement | any;
  onOpenInfoDrawer: () => void;
}
