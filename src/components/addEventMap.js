import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};
const center = { lat: 54.2307982, lng: -2.847663 };

function AddEventMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBVRxbVl5Qtm2LFX8ZvYZ34Wg8R_iIRV84",
  });

  // const [map, setMap] = React.useState(null);

  // const onLoad = React.useCallback(function callback(map) {
  //   setMap(map);
  // }, []);

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null);
  // }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={5}
      // onLoad={onLoad}
      // onUnmount={onUnmount}
    >
    </GoogleMap>
  ) : (
    <>Loading...</>
  );
}

export default React.memo(AddEventMap);
