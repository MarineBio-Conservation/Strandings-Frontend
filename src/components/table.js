import React from "react";
import { useRecoilState } from "recoil";
import { filteredStrandings } from "../atoms";

function StrandingsTable() {
  const [strandings] = useRecoilState(filteredStrandings);
  const rows = strandings.map((stranding) => {
    return (
      <React.Fragment key={stranding.id}>
        <p
          className="px-5 py-5 border-b border-gray-200 text-sm text-gray-900 whitespace-no-wrap"
          key={stranding.id + "_date"}
        >
          {new Date(stranding.date).toDateString()}
        </p>
        <p
          className="px-5 py-5 border-b border-gray-200 text-sm text-gray-900 whitespace-no-wrap text-center capitalize hidden md:block"
          key={stranding.id + "_pos"}
        >
          {stranding.region
            ? stranding.region
            : "Lat:" +
              stranding.position.lat.toFixed(1) +
              " Lng: " +
              stranding.position.lng.toFixed(1)}
        </p>
        <p
          className="px-5 py-5 border-b border-gray-200 text-sm text-gray-900 whitespace-no-wrap text-center capitalize"
          key={stranding.id + "_type"}
        >
          {stranding.animal_type}
        </p>
        <p
          className="px-5 py-5 border-b border-gray-200 text-sm text-gray-900 whitespace-no-wrap text-center"
          key={stranding.id + "_died"}
        >
          {stranding.died}
        </p>
        <p
          className="px-5 py-5 border-b border-gray-200 text-sm text-gray-900 whitespace-no-wrap text-center capitalize hidden md:block"
          key={stranding.id + "_investigation"}
        >
          {stranding.investigation_type
            ? stranding.investigation_type
            : "Unknown"}
        </p>
        <p
          className="px-5 py-5 border-b border-gray-200 text-sm text-gray-900 whitespace-no-wrap text-center capitalize hidden md:block"
          key={stranding.id + "_cause"}
        >
          {stranding.causes ? stranding.causes : "Unknown"}
        </p>
      </React.Fragment>
    );
  });

  return (
    <div>
      <div className="container mx-auto px-4 md:px-8">
        <div className="py-8">
          <div className="-mx-4 md:-mx-8 px-4 md:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <div className="min-w-full leading-normal grid grid-cols-3 md:grid-cols-6">
                <div
                  className="px-5 py-3 border-b-2 border-gray-200 
                            bg-gray-100 text-center text-xs 
                            font-semibold text-gray-600 uppercase 
                            tracking-wider"
                >
                  Date
                </div>
                <div
                  className="px-5 py-3 border-b-2 
                            border-gray-200 bg-gray-100 text-center 
                            text-xs font-semibold text-gray-600 
                            uppercase tracking-wider hidden md:block"
                >
                  Region
                </div>
                <div
                  className="px-5 py-3 border-b-2 
                            border-gray-200 bg-gray-100 text-center 
                            text-xs font-semibold text-gray-600 
                            uppercase tracking-wider"
                >
                  Animal
                </div>
                <div
                  className="px-5 py-3 border-b-2 
                            border-gray-200 bg-gray-100 text-center 
                            text-xs font-semibold text-gray-600 
                            uppercase tracking-wider"
                >
                  Died
                </div>
                <div
                  className="px-5 py-3 border-b-2 
                            border-gray-200 bg-gray-100 text-center 
                            text-xs font-semibold text-gray-600 
                            uppercase tracking-wider hidden md:block"
                >
                  Investigation
                </div>
                <div
                  className="px-5 py-3 border-b-2 
                            border-gray-200 bg-gray-100 text-center 
                            text-xs font-semibold text-gray-600 
                            uppercase tracking-wider hidden md:block"
                >
                  Cause
                </div>
                {rows}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StrandingsTable;
