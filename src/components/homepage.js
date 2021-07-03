import React from "react";
import StrandingsMap from "./map";
import StrandingsTable from "./table";
import DataController from "./dataController";

function Homepage() {
  return (
    <>
      <DataController />
      <div className="h-3/5">
        <StrandingsMap />
      </div>
      <div className="overflow-auto h-2/5">
        <StrandingsTable />
      </div>
    </>
  );
}

export default Homepage;
