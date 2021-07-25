import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "react-loader-spinner";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const labelStyle =
  "block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4";
const labelRowStyle = "md:flex md:items-center mb-6";
/*Database schema:
	Id                              int         `json:"id"`
	Date                            time.Time   `json:"date"`
	Pos                             position    `json:"position"`
	Bound                           *[]position `json:"bounds"`
	Regions                         *[]string   `json:"regions"`
	AnimalType                      *[]string   `json:"animal_type"`
	Number                          int         `json:"number"`
	Died                            int         `json:"died"`
	Investigation                   *string     `json:"investigation_type"`
	InvestigationDescription        *string     `json:"investigation_description"`
	References                      *string     `json:"references"`
	Causes                          *[]string   `json:"causes"`
	InvestigationResultsDescription *string     `json:"investigation_results_description"`
	ResearcherName                  *string     `json:"researcher_name"`
*/

function ViewLoadedEvent({
  id,
  date,
  position,
  bounds,
  regions,
  animal_type,
  number,
  died,
  investigation_type,
  investigation_description,
  references,
  causes,
  investigation_results_description,
  researcher_name,
}) {
  const containerStyle = {
    width: "75vw",
    height: "400px",
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBVRxbVl5Qtm2LFX8ZvYZ34Wg8R_iIRV84",
  });

  return (
    <div className="flex justify-center p-8">
      <div className="w-full container">
        <div className={labelRowStyle}>
          <div className="md:w-1/6">
            <label className={labelStyle} htmlFor="id">
              ID
            </label>
          </div>
          <div id="id" className="md:w-5/6">
            {id}
          </div>
        </div>
        <div className={labelRowStyle}>
          <div className="md:w-1/6">
            <label className={labelStyle} htmlFor="date">
              Date
            </label>
          </div>
          <div id="date" className="md:w-5/6">
            {date}
          </div>
        </div>
        <div className={labelRowStyle}>
          <div className="w-full">
            <label className={labelStyle}>Location</label>
          </div>
          <div className="md:w-5/6">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={position}
                zoom={8}
              >
                <Marker position={position} />
              </GoogleMap>
            ) : (
              <>Loading...</>
            )}
          </div>
        </div>
        <div className={labelRowStyle}>
          <div className="md:w-1/6">
            <label className={labelStyle} htmlFor="animals">
              Animals Stranded
            </label>
          </div>
          <div className="md:w-5/6">{animal_type}</div>
        </div>
        <div className={labelRowStyle}>
          <div className="md:w-1/6">
            <label className={labelStyle} htmlFor="died">
              Number stranded
            </label>
          </div>
          <div className="md:w-5/6">{number}</div>
        </div>
        <div className={labelRowStyle}>
          <div className="md:w-1/6">
            <label className={labelStyle} htmlFor="died">
              Number dead
            </label>
          </div>
          <div className="md:w-5/6">{died}</div>
        </div>
        <div className={labelRowStyle}>
          <div className="md:w-1/6">
            <label className={labelStyle} htmlFor="investigation_type">
              Investigation Type
            </label>
          </div>
          <div className="md:w-5/6">{investigation_type}</div>
        </div>
        <div className={labelRowStyle}>
          <div className="md:w-1/6">
            <label className={labelStyle} htmlFor="investigation">
              Investigation Details
            </label>
          </div>
          <div className="md:w-5/6">{investigation_description}</div>
        </div>
        <div className={labelRowStyle}>
          <div className="md:w-1/6">
            <label className={labelStyle} htmlFor="investigation_results">
              Investigation Results
            </label>
          </div>
          <div className="md:w-5/6">{investigation_results_description}</div>
        </div>
        <div className={labelRowStyle}>
          <div className="md:w-1/6">
            <label className={labelStyle} htmlFor="references">
              References
            </label>
          </div>
          <div className="md:w-5/6">{references}</div>
        </div>
        <div className={labelRowStyle}>
          <div className="md:w-1/6">
            <label className={labelStyle} htmlFor="reporter">
              Researcher
            </label>
          </div>
          <div className="md:w-5/6">{researcher_name}</div>
        </div>
      </div>
    </div>
  );
}

function ViewEvent() {
  const location = useLocation();
  const [strandingEvent, setStrandingEvent] = useState(null);

  useEffect(() => {
    let url = new URL("https://api.marinestrandings.com/event");
    url.searchParams.append(
      "id",
      new URLSearchParams(location.search).get("id")
    );
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStrandingEvent(data);
      })
      .catch((error) => console.log(error));
  }, [location]);

  if (strandingEvent) {
    return <ViewLoadedEvent {...strandingEvent} />;
  } else {
    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    );
  }
}

export default ViewEvent;
