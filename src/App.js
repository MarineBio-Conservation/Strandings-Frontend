import { useEffect, useState } from "react";
// import fetchPonyfill from 'fetch-ponyfill';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";
import "./App.css";
// const {fetch, Request, Response, Headers} = fetchPonyfill();

function App() {
  const [strandings, setStrandings] = useState([]);
  useEffect(() => {
    const exampleStrandings = [
      { lat: 58.67203558, long: -3.374386965 },
      { lat: 57.59815056, long: -3.762044958 },
      { lat: 54.62191569, long: -1.078397772 },
      { lat: 54.62191569, long: -1.078397772 },
      { lat: 54.62191569, long: -1.078397772 },
      { lat: 54.62191569, long: -1.078397772 },
      { lat: 54.62191569, long: -1.078397772 },
      { lat: 55.07264096, long: -1.447110532 },
      { lat: 55.1446, long: -8.1907 },
      { lat: 54.62191569, long: -1.078397772 },
      { lat: 54.62191569, long: -1.078397772 },
      { lat: 55.04374785, long: -5.0509199 },
      { lat: 52.85196601, long: 1.484746092 },
      { lat: 49.20119693, long: -2.019896829 },
      { lat: 57.34539911, long: -1.93353066 },
      { lat: 60.44977781, long: -1.605549405 },
      { lat: 53.76752787, long: -6.18640282 },
      { lat: 52.85196601, long: 1.484746092 },
      { lat: 52.78691229, long: 1.61455665 },
      { lat: 52.82606959, long: 1.539102051 },
      { lat: 52.94571824, long: 1.222764354 },
      { lat: 53.30812209, long: 0.292099847 },
      { lat: 52.85196601, long: 1.484746092 },
      { lat: 53.4899967, long: -3.055160234 },
      { lat: 53.47239305, long: 0.162296952 },
    ];
    setStrandings(exampleStrandings);
  }, []);

  const markers = strandings.map((pos) => (
    <Marker position={{ lat: pos.lat, lng: pos.long }} />
  ));

  const StrandingsMap = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={6.23}
        defaultCenter={{ lat: 55.9503652, lng: -6.5259577 }}
      >
        <MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
          {markers}
        </MarkerClusterer>
      </GoogleMap>
    ))
  );
  return (
    <div className="App">
      <StrandingsMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVRxbVl5Qtm2LFX8ZvYZ34Wg8R_iIRV84&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
