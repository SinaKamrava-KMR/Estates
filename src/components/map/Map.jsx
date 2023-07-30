import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { styled } from "styled-components";

const MapStyled = styled.div`
  width: 100%;
  height: 620px;
  flex: 1;
  overflow: hidden;
`;
const position = [51.505, -0.09];

function Map() {
  return (
    <MapStyled>
      <MapContainer
        style={{ height: "100%" }}
        center={position}
        zoom={6}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      ,
    </MapStyled>
  );
}

export default Map;
