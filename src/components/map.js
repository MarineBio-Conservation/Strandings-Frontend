import { memo } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerClusterer,
  Marker,
} from "@react-google-maps/api";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function StrandingsMap({ strandings }) {
//  const [map, setMap] = useState(null);

  const options = {
    imagePath: process.env.PUBLIC_URL + "/images/",
  };

  const mapContainerStyle = {
    height: "100vh",
    width: "100vw",
  };

  const center = { lat: 54.2307982, lng: -2.847663 };

  const onBoundsChanged = () => {
 //   if (map) {
   //   console.log(map.getBounds());
   //}
  };

//  const onLoad = useCallback(function callback(map) {
//    setMap(map);
//  }, []);

  const StrandingsMap = () => {
    const { isLoaded, loadError } = useJsApiLoader({
      googleMapsApiKey: "AIzaSyBVRxbVl5Qtm2LFX8ZvYZ34Wg8R_iIRV84",
    });

    return !isLoaded ? (
      <Loader type="Puff" color="#00BFFF" height={80} width={80} />
    ) : loadError ? (
      <div>Error loading map. Please refresh.</div>
    ) : (
      <>
        <GoogleMap
          id="strandings-map"
          mapContainerStyle={mapContainerStyle}
          zoom={6}
          center={center}
          gridSize={30}
          onBoundsChanged={onBoundsChanged}
          // onLoad={onLoad}
          // onUnmount={onUnmount}
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
      </>
    );
  };
  return <StrandingsMap />;
}

export default memo(StrandingsMap);
