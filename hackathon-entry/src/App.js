import "./styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import { Icon, divIcon, point } from "leaflet";

// create custom icon
const customIcon = new Icon({
  iconUrl: require("./icons/redmarker.png"),
  iconSize: [38, 38] // size of the icon
});
// create custom icon
const customIcon2 = new Icon({
  iconUrl: require("./icons/yellowmarker.png"),
  iconSize: [38, 38] // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  });
};

// markers
//17.97929	-76.7884
//17.9784	-76.7883
//17.97955	-76.7879
//17.97837	-76.7883
//17.97833	-76.7877
//17.9853859	-76.7869032
//17.97658	-76.7866

const markers = [
  {
    geocode: [17.98, -76.786903],
    popUp: "Hello, I am pop up 1"
  },
  {
    geocode: [17.9784, -76.7883]
  },
  {
    geocode: [17.97955, -76.7879]
  },
  {
    geocode: [17.97837, -76.7883]
  },
  {
    geocode: [17.97833, -76.7877]
  },
  {
    geocode: [17.9853859, -76.7869032]
  },
  {
    geocode: [17.97658, -76.7866]
  }
];

const markers2 = [
  {
    geocode: [17.98208, -76.783],
    popUp: "ffghfg"
  },
  {
    geocode: [17.98375, -76.7859]
  },
  {
    geocode: [17.97986, -76.7887]
  },
  {
    geocode: [17.97635, -76.7861]
  },
  {
    geocode: [17.98208, -76.783]
  },
  {
    geocode: [17.97687, -76.7868]
  },
  {
    geocode: [17.98233, -76.7866]
  },
  {
    geocode: [17.98215, -76.7856]
  },
  {
    geocode: [17.97781, -76.7871]
  },
  {
    geocode: [17.97902, -76.7873]
  },
  {
    geocode: [17.9784, -76.7874]
  },
  {
    geocode: [17.97769, -76.7871]
  },
  {
    geocode: [17.9787, -76.786]
  },
  {
    geocode: [17.97974, -76.7861]
  },
  {
    geocode: [17.97766, -76.7868]
  },
  {
    geocode: [17.98431, -76.7866]
  },
  {
    geocode: [17.97906, -76.7869]
  },
  {
    geocode: [17.98216, -76.7836]
  },
  {
    geocode: [17.97797, -76.7865]
  },
  {
    geocode: [17.97724, -76.787]
  },
  {
    geocode: [17.97988, -76.7884]
  },
  {
    geocode: [17.98231, -76.7836]
  },
  {
    geocode: [17.98513, -76.7867]
  },
  {
    geocode: [17.97973, -76.7875]
  },
  {
    geocode: [17.97998, -76.7873]
  },
  {
    geocode: [17.97855, -76.7885]
  },
  {
    geocode: [17.97896, -76.7876]
  },
  {
    geocode: [17.97834, -76.7877]
  },
  {
    geocode: [17.97984, -76.7877]
  },
  {
    geocode: [17.97789, -76.7864]
  },
  {
    geocode: [17.9788, -76.7856]
  },
  {
    geocode: [17.97948, -76.7856]
  },
  {
    geocode: [17.9796, -76.7861]
  },
  {
    geocode: [17.97799, -76.7862]
  },
  {
    geocode: [17.97801, -76.7874]
  },
  {
    geocode: [17.97953, -76.7884]
  },
  {
    geocode: [17.97954, -76.7883]
  },
  {
    geocode: [17.97957, -76.7876]
  },
  {
    geocode: [17.97947, -76.7873]
  },
  {
    geocode: [17.97908, -76.7874]
  },
  {
    geocode: [17.97904, -76.7878]
  },
  {
    geocode: [17.9784, -76.7885]
  },
  {
    geocode: [17.97822, -76.7886]
  },
  {
    geocode: [17.97761, -76.7873]
  },
  {
    geocode: [17.97776, -76.7871]
  },
  {
    geocode: [17.97873, -76.7863]
  },
  {
    geocode: [17.97906, -76.7857]
  },
  {
    geocode: [17.97927, -76.7857]
  },
  {
    geocode: [17.97921, -76.7864]
  },
  {
    geocode: [17.97784, -76.7871]
  },
  {
    geocode: [17.97723, -76.7867]
  }
];

export default function App() {
  return (
    <MapContainer center={[17.99, -76.79]} zoom={13}>
      {/* OPEN STREEN MAPS TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* WATERCOLOR CUSTOM TILES */}
      {/* <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
      /> */}
      {/* GOOGLE MAPS TILES */}
      {/* <TileLayer
        attribution="Google Maps"
        // url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
        // url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
        url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
        maxZoom={20}
        subdomains={["mt0", "mt1", "mt2", "mt3"]}
      /> */}

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {/* Mapping through the markers */}
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
        {markers2.map((marker2) => (
          <Marker position={marker2.geocode} icon={customIcon2}>
            <Popup>{marker2.popUp}</Popup>
          </Marker>
        ))}

        {/* Hard coded markers */}
        {/* <Marker position={[51.505, -0.09]} icon={customIcon}>
          <Popup>This is popup 1</Popup>
        </Marker>
        <Marker position={[51.504, -0.1]} icon={customIcon}>
          <Popup>This is popup 2</Popup>
        </Marker>
        <Marker position={[51.5, -0.09]} icon={customIcon}>
          <Popup>This is popup 3</Popup>
        </Marker>
       */}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
