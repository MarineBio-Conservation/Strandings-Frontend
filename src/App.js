import React from 'react';
import "./App.css";
import StrandingsMap from "./components/map";
import StrandingsTable from "./components/table";
import DataController from "./components/dataController";

function App() {
  return (
    <>
      <DataController />
      <div className="h-screen">
        <div className="h-3/5">
          <StrandingsMap />
        </div>
        <div className="overflow-auto  h-2/5">
          <StrandingsTable />
        </div>
      </div>
    </>
  );
}

export default App;
