import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import AddEventMap from "./addEventMap";

function AddEvent() {
  return (
    <div className="flex justify-center p-8">
      <form className="w-full container">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/6">
            <label
              className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              htmlFor="date"
            >
              Date
            </label>
          </div>
          <div className="md:w-5/6">
            <DayPickerInput inputProps={{ id: "date" }} />
          </div>
        </div>
        <div className="md:items-center mb-6">
          <div className="w-full">
            <label
              className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              Location
            </label>
          </div>
          <div className="w-full h-96">
            <AddEventMap />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/6">
            <label
              className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              htmlFor="animals"
            >
              Animals Stranded
            </label>
          </div>
          <div className="md:w-5/6">
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="animals"
              rows="5"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/6">
            <label
              className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              htmlFor="died"
            >
              Died
            </label>
          </div>
          <div className="md:w-5/6">
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="died"
              type="number"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/6">
            <label
              className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              htmlFor="investigation"
            >
              Investigation Details
            </label>
          </div>
          <div className="md:w-5/6">
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="investigation"
              rows="5"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/6">
            <label
              className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              htmlFor="investigation_results"
            >
              Investigation Results
            </label>
          </div>
          <div className="md:w-5/6">
            <fieldset
              id="investigation_results"
            >
              <label className="px-3"><input className="appearance-none checked:bg-blue-600 checked:border-transparent rounded mx-2" type="checkbox" value="Unknown" />Unknown</label>
              <label className="px-3"><input className="appearance-none checked:bg-blue-600 checked:border-transparent rounded mx-2" type="checkbox" value="Pending" />Pending</label>
              <label className="px-3"><input className="appearance-none checked:bg-blue-600 checked:border-transparent rounded mx-2" type="checkbox" value="Disease" />Disease</label>
              <label className="px-3"><input className="appearance-none checked:bg-blue-600 checked:border-transparent rounded mx-2" type="checkbox" value="Pollution" />Pollution</label>
              <label className="px-3"><input className="appearance-none checked:bg-blue-600 checked:border-transparent rounded mx-2" type="checkbox" value="Vessel Strike" />Vessel Strike</label>
              <label className="px-3"><input className="appearance-none checked:bg-blue-600 checked:border-transparent rounded mx-2" type="checkbox" value="Bycatch" />Bycatch</label>
              <label className="px-3"><input className="appearance-none checked:bg-blue-600 checked:border-transparent rounded mx-2" type="checkbox" value="Entanglement" />Entanglement</label>
              <label className="px-3"><input className="appearance-none checked:bg-blue-600 checked:border-transparent rounded mx-2" type="checkbox" value="Sonar" />Sonar</label>
              <label className="px-3"><input className="appearance-none checked:bg-blue-600 checked:border-transparent rounded mx-2" type="checkbox" value="Other" />Other</label>
            </fieldset>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/6">
            <label
              className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              htmlFor="references"
            >
              References
            </label>
          </div>
          <div className="md:w-5/6">
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="references"
              rows="5"
            />
          </div>
        </div>
        <div className="flex">
          <button
            className="m-auto shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEvent;
