import { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { MarkerClusterer, Marker } from "@react-google-maps/api";
import "./App.css";

function App() {
  const [strandings, setStrandings] = useState([]);
  useEffect(() => {
    const exampleStrandings = [
      { lat: 58.67203558, lng: -3.374386965 },
      { lat: 57.59815056, lng: -3.762044958 },
      { lat: 54.62191569, lng: -1.078397772 },
      { lat: 54.62191569, lng: -1.078397772 },
      { lat: 54.62191569, lng: -1.078397772 },
      { lat: 54.62191569, lng: -1.078397772 },
      { lat: 54.62191569, lng: -1.078397772 },
      { lat: 55.07264096, lng: -1.447110532 },
      { lat: 55.1446, lng: -8.1907 },
      { lat: 54.62191569, lng: -1.078397772 },
      { lat: 54.62191569, lng: -1.078397772 },
      { lat: 55.04374785, lng: -5.0509199 },
      { lat: 52.85196601, lng: 1.484746092 },
      { lat: 49.20119693, lng: -2.019896829 },
      { lat: 57.34539911, lng: -1.93353066 },
      { lat: 60.44977781, lng: -1.605549405 },
      { lat: 53.76752787, lng: -6.18640282 },
      { lat: 52.85196601, lng: 1.484746092 },
      { lat: 52.78691229, lng: 1.61455665 },
      { lat: 52.82606959, lng: 1.539102051 },
      { lat: 52.94571824, lng: 1.222764354 },
      { lat: 53.30812209, lng: 0.292099847 },
      { lat: 52.85196601, lng: 1.484746092 },
      { lat: 53.4899967, lng: -3.055160234 },
      { lat: 53.47239305, lng: 0.162296952 },
    ];
    setStrandings(exampleStrandings);
  }, []);

  const options = {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m", // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
  };


  const mapContainerStyle = {
    height: "100vh",
    width: "100vw",
  };

  const center = { lat: 55.9503652, lng: -6.5259577 };

  function createKey(location) {
    return location.lat + location.lng;
  }
 const StrandingsMap = () => {
	const { isLoaded } = useJsApiLoader({
				    googleMapsApiKey: "AIzaSyBVRxbVl5Qtm2LFX8ZvYZ34Wg8R_iIRV84" // ,
				    // ...otherOptions
				   });
			

    return !isLoaded ? <></> : (
      <>
          <GoogleMap
            id="marker-example"
            mapContainerStyle={mapContainerStyle}
            zoom={6.23}
            center={center}
          >
            <MarkerClusterer options={options}>
              {(clusterer) =>
                strandings.map((location) => (
                  <Marker
                    key={createKey(location)}
                    position={location}
                    clusterer={clusterer}
                  />
                ))
              }
            </MarkerClusterer>
          </GoogleMap>
      </>
    );
  };
  return (
    <div className="App">
      <StrandingsMap />
    </div>
  );
}

export default App;
