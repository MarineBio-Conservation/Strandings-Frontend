import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { mapBoundsAtom, strandingsAtom } from "../atoms";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  MarkerClusterer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};
const center = { lat: 54.2307982, lng: -2.847663 };

function StrandingsMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBVRxbVl5Qtm2LFX8ZvYZ34Wg8R_iIRV84",
  });

  const [map, setMap] = React.useState(null);
  const [strandings] = useRecoilState(strandingsAtom);
  const setMapBounds = useSetRecoilState(mapBoundsAtom);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  

  const onBoundsChange = React.useCallback(
    
    function callback() {
      const boundsUpdated = (bounds) => {
        const northEast = bounds.getNorthEast();
        const southWest = bounds.getSouthWest();
        const newBounds = {
          latMin: southWest.lat(),
          latMax: northEast.lat(),
          lngMin: southWest.lng(),
          lngMax: northEast.lng(),
        };
        setMapBounds(newBounds);
      };
      if (map) {
        boundsUpdated(map.getBounds());
      }
    },
    [map, setMapBounds]
  );

  

  const options = {
    imagePath: process.env.PUBLIC_URL + "/images/",
    gridSize: 20,
  };
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={5}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onBoundsChanged={onBoundsChange}
    >
      <MarkerClusterer options={options}>
        {(clusterer) =>
          strandings.map((location) => (
            <Marker
              key={location.id}
              position={location.position}
              clusterer={clusterer}
            />
          ))
        }
      </MarkerClusterer>
    </GoogleMap>
  ) : (
    <>Loading...</>
  );
}

export default React.memo(StrandingsMap);
