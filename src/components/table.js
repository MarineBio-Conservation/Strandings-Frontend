function StrandingsTable({ strandings }) {
  const rows = strandings.map((stranding) => {
    return (
      <tr key={stranding.id}>
        <td
          className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-1/6"
          key={stranding.id + "date"}
        >
          <div className="flex items-center">
            <div
              className="flex-shrink-0 w-10 h-10 hidden 
                  sm:table-cell"
            ></div>
            <div className="ml-3">
              <p className="text-gray-900 whitespace-no-wrap">
                {new Date(stranding.date).toDateString()}
              </p>
            </div>
          </div>
        </td>
        <td
          className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-1/6"
          key={stranding.id + "region"}
        >
          <p className="text-gray-900 whitespace-no-wrap text-center capitalize">
            {stranding.region
              ? stranding.region
              : "Lat:" +
                stranding.position.lat.toFixed(1) +
                " Lng: " +
                stranding.position.lng.toFixed(1)}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-1/6">
          <p className="text-gray-900 whitespace-no-wrap text-center capitalize">
            {stranding.animal_type}
          </p>
        </td>
        <td
          className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-1/6"
          key={stranding.id + "died"}
        >
          <p className="text-gray-900 whitespace-no-wrap text-center">
            {stranding.died}
          </p>
        </td>
        <td
          className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-1/6"
          key={stranding.id + "invest"}
        >
          <p className="text-gray-900 whitespace-no-wrap text-center capitalize">
            {stranding.investigation_type
              ? stranding.investigation_type
              : "Unknown"}
          </p>
        </td>
        <td
          className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-1/6"
          key={stranding.id + "cause"}
        >
          <p className="text-gray-900 whitespace-no-wrap text-center capitalize">
            {stranding.causes ? stranding.causes : "Unknown"}
          </p>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      className="px-5 py-3 border-b-2 border-gray-200 
                            bg-gray-100 text-center text-xs 
                            font-semibold text-gray-600 uppercase 
                            tracking-wider w-1/6"
                    >
                      Event Date
                    </th>
                    <th
                      className="px-5 py-3 border-b-2 
                            border-gray-200 bg-gray-100 text-center 
                            text-xs font-semibold text-gray-600 
                            uppercase tracking-wider w-1/6"
                    >
                      Region
                    </th>
                    <th
                      className="px-5 py-3 border-b-2 
                            border-gray-200 bg-gray-100 text-center 
                            text-xs font-semibold text-gray-600 
                            uppercase tracking-wider w-1/6"
                    >
                      Stranded
                    </th>
                    <th
                      className="px-5 py-3 border-b-2 
                            border-gray-200 bg-gray-100 text-center 
                            text-xs font-semibold text-gray-600 
                            uppercase tracking-wider w-1/6"
                    >
                      Died
                    </th>
                    <th
                      className="px-5 py-3 border-b-2 
                            border-gray-200 bg-gray-100 text-center 
                            text-xs font-semibold text-gray-600 
                            uppercase tracking-wider w-1/6"
                    >
                      Investigation
                    </th>
                    <th
                      className="px-5 py-3 border-b-2 
                            border-gray-200 bg-gray-100 text-center 
                            text-xs font-semibold text-gray-600 
                            uppercase tracking-wider w-1/6"
                    >
                      Cause
                    </th>
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
