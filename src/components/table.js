import React from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { filteredStrandings } from "../atoms";

function StrandingsTable() {
  const [strandings] = useRecoilState(filteredStrandings);

  const dataStyle =
    "px-5 py-5 border-b border-gray-200 text-sm text-gray-900 whitespace-no-wrap text-center capitalize";
  const dataStyleHiddenMobile = dataStyle + " hidden md:table-cell";

  const headingStyle =
    "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider";
  const headingStyleHiddenMobile = headingStyle + " hidden md:table-cell";

  const rows = strandings.map((stranding) => {
    return (
      <tr key={stranding.id}>
        <td className={dataStyle} key={stranding.id + "_date"}>
          {new Date(stranding.date).toDateString()}
        </td>
        <td className={dataStyleHiddenMobile} key={stranding.id + "_pos"}>
          {stranding.region
            ? stranding.region
            : "Lat:" +
              stranding.position.lat.toFixed(1) +
              " Lng: " +
              stranding.position.lng.toFixed(1)}
        </td>
        <td className={dataStyle} key={stranding.id + "_type"}>
          {stranding.animal_type}
        </td>
        <td className={dataStyle} key={stranding.id + "_died"}>
          {stranding.died}
        </td>
        <td
          className={dataStyleHiddenMobile}
          key={stranding.id + "_investigation"}
        >
          {stranding.investigation_type
            ? stranding.investigation_type
            : "Unknown"}
        </td>
        <td className={dataStyleHiddenMobile} key={stranding.id + "_cause"}>
          {stranding.causes ? stranding.causes : "Unknown"}
        </td>
        <td className={dataStyleHiddenMobile} key={stranding.id + "_details"}>
          <Link
            key={stranding.id + "_detailsLink"}
            to={"/view?id=" + stranding.id}
          >
            View...
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div className="container mx-auto px-4 md:px-8">
        <div className="py-8">
          <div className="-mx-4 md:-mx-8 px-4 md:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal table-auto">
                <thead>
                  <tr>
                    <th className={headingStyle}>Date</th>
                    <th className={headingStyleHiddenMobile}>Region</th>
                    <th className={headingStyle}>Animal</th>
                    <th className={headingStyle}>Died</th>
                    <th className={headingStyleHiddenMobile}>Investigation</th>
                    <th className={headingStyleHiddenMobile}>Cause</th>
                    <th className={headingStyleHiddenMobile}>Details</th>
                  </tr>
                </thead>
                <tbody>{rows}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StrandingsTable;
