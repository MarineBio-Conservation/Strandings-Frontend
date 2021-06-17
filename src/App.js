import { useEffect, useState } from "react";
import "./App.css";
import StrandingsMap from './components/map'

function App() {
  const [strandings, setStrandings] = useState([]);
  useEffect(() => {
    fetch("https://api.marinestrandings.com/events")
      .then((response) => response.json())
      .then((data) => setStrandings(data));
  }, []);
  return (
    <div className="App">
      <StrandingsMap strandings={strandings} />
    </div>
  );
}

export default App;
