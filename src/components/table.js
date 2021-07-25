import React from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { filteredStrandings } from "../atoms";

function StrandingsTable() {
  const [strandings] = useRecoilState(filteredStrandings);

  const dataStyle =
    "px-5 py-5 border-b border-gray-200 text-sm text-gray-900 whitespace-no-wrap text-center capitalize";
  const dataStyleHiddenMobile = dataStyle + " hidden md:block";

  const headingStyle =
    "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider";
  const headingStyleHiddenMobile = headingStyle + " hidden md:block";

  const rows = strandings.map((stranding) => {
    return (
      <React.Fragment key={stranding.id}>
        <p role="cell" className={dataStyle} key={stranding.id + "_date"}>
          {new Date(stranding.date).toDateString()}
        </p>
        <p
          role="cell"
          className={dataStyleHiddenMobile}
          key={stranding.id + "_pos"}
        >
          {stranding.region
            ? stranding.region
            : "Lat:" +
              stranding.position.lat.toFixed(1) +
              " Lng: " +
              stranding.position.lng.toFixed(1)}
        </p>
        <p role="cell" className={dataStyle} key={stranding.id + "_type"}>
          {stranding.animal_type}
        </p>
        <p role="cell" className={dataStyle} key={stranding.id + "_died"}>
          {stranding.died}
        </p>
        <p
          role="cell"
          className={dataStyleHiddenMobile}
          key={stranding.id + "_investigation"}
        >
          {stranding.investigation_type
            ? stranding.investigation_type
            : "Unknown"}
        </p>
        <p
          role="cell"
          className={dataStyleHiddenMobile}
          key={stranding.id + "_cause"}
        >
          {stranding.causes ? stranding.causes : "Unknown"}
        </p>
        <p
          role="cell"
          className={dataStyleHiddenMobile}
          key={stranding.id + "_details"}
        >
          <Link
            key={stranding.id + "_detailsLink"}
            to={"/view?id=" + stranding.id}
          >
            View...
          </Link>
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
              <div
                className="min-w-full leading-normal grid grid-cols-3 md:grid-cols-7"
                role="table"
              >
                <div role="columnheader" className={headingStyle}>
                  Date
                </div>
                <div role="columnheader" className={headingStyleHiddenMobile}>
                  Region
                </div>
                <div role="columnheader" className={headingStyle}>
                  Animal
                </div>
                <div role="columnheader" className={headingStyle}>
                  Died
                </div>
                <div role="columnheader" className={headingStyleHiddenMobile}>
                  Investigation
                </div>
                <div role="columnheader" className={headingStyleHiddenMobile}>
                  Cause
                </div>
                <div role="columnheader" className={headingStyleHiddenMobile}>
                  Details
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
