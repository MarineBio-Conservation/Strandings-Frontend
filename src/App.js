import { Auth0Provider } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import "./App.css";
import StrandingsMap from "./components/map";
import StrandingsTable from "./components/table";

function App() {
  const [strandings, setStrandings] = useState([]);
  const [maxBounds, setMaxBounds] = useState({latMin: 46.7808741163144, latMax: 60.54282671465937, lngMin: -40.684577062500004 , lngMax: 34.98925106249999});
  useEffect(() => {
    let url = new URL("https://api.marinestrandings.com/events")
    Object.keys(maxBounds).forEach(key => url.searchParams.append(key, maxBounds[key]))
    // console.log(url)
    fetch(url,)
      .then((response) => response.json())
      .then((data) => setStrandings(data));
  }, [maxBounds]);

  const boundsUpdated = (bounds) => {
    const northEast = bounds.getNorthEast();
    const southWest = bounds.getSouthWest();
    const newBounds = {
      latMin: southWest.lat(),
      latMax: northEast.lat(),
      lngMin: southWest.lng(),
      lngMax: northEast.lng()
    };
    const isLarger = 
      newBounds.latMin < maxBounds.latMin ||
      newBounds.latMax > maxBounds.latMax ||
      newBounds.lngMin < maxBounds.lngMin ||
      newBounds.lngMax > maxBounds.lngMax;

    if (isLarger) {
      setMaxBounds(newBounds);
    }
  };

  return (
    <div className="App">
		  <Auth0Provider
		      domain="dev-sscojs5p.us.auth0.com"
		      clientId="zBTP9waUmLFPKTuNk5zoQwzai8c5vpxq"
		      redirectUri={window.location.origin}
		    >
        <div className="h-screen">
          <div className="h-3/5">
            <StrandingsMap strandings={strandings}  boundsUpdated={boundsUpdated} />
          </div>
          <div className="overflow-auto  h-2/5">
            <StrandingsTable strandings={strandings} />
          </div>
        </div>
		  </Auth0Provider>
    </div>
  );
}

export default App;
