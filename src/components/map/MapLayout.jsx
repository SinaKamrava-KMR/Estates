import {
  TileLayer,
  MapContainer,
  Polygon,
  Marker,
  Popup,
  Circle,
  useMap,
  ZoomControl,
} from "react-leaflet";
import { styled } from "styled-components";
import "leaflet/dist/leaflet.css";

import icon2x from "../../assets/images/marker-icon-2x.png";
import icon from "../../assets/images/marker-icon.png";
import iconshadow from "../../assets/images/marker-shadow.png";
import L from "leaflet";
import { motion } from "framer-motion";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: icon2x,
  iconUrl: icon,
  shadowUrl: iconshadow,
});

const MapStyled = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  overflow: hidden;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 10px;
`;
const Box = styled.div`
  width: 400px;
  height: 50px;
  position: absolute;
  left: 30px;
  top: 100px;
  z-index: 2000;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 0 10px #11111152;
`;
const ResultsBox = styled.div`
  width: 100%;
  height: 400px;
  position: absolute;
  left: 0;
  top: 56px;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 0 10px #11111152;
`;
const HomeBox = styled.div`
  width: 500px;
  position: absolute;
  right: 10px;
  top: 100px;
  bottom: 10px;
  z-index: 2000;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 0 10px #11111152;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  outline: 0;
  padding: 10px;
  border-radius: 6px;
  font-size: 18px;
`;

const CityPopup = styled(Popup)`
  margin-bottom: 10px;
  .leaflet-popup-content-wrapper {
    border-radius: 5px;
  }

  .leaflet-popup-tip-container {
    /* visibility: hidden; */
  }
`;

const position = [28.365724898272077, -81.55254364013672];

const hollywoodStudiosPolygon = [
  [
    [51.505, -0.09],
    [51.5, -0.1],
    [51.49, -0.1],
    [51.49, -0.09],
  ],
];

const epcotCenter = [29.373711392892478, -81.54936790466309];
const popupposition = [30.37371139289248, -81.54936790466310];

function MapLayout() {
  return (
    <MapStyled>
      <Box>
        <Input placeholder="search a city " />
        <ResultsBox></ResultsBox>
      </Box>
      <HomeBox
        as={motion.div}
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{ delay: 6 }}
      ></HomeBox>

      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={true}
        style={{ height: "100vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polygon color="#1e1d2265" positions={hollywoodStudiosPolygon} />

        <Circle
          stroke={true}
          fillOpacity={0.1}
          center={epcotCenter}
          color="#1e1d228a"
          radius={400}
        />
        <Marker position={epcotCenter}>
          <CityPopup position={popupposition} >this is a just popup</CityPopup>
        </Marker>

        <ChangeCenter position={epcotCenter} />

        <ZoomControl position="bottomright" />
      </MapContainer>
    </MapStyled>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  setTimeout(() => {
    map.flyTo(position, 16, { duration: 3 });
  }, 2000);
  return null;
}

export default MapLayout;
