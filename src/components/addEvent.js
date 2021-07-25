import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import AddEventMap from "./addEventMap";
import { useForm } from "react-hook-form";

const labelStyle =
  "block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4";
const inputTextBoxStyle =
  "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline";
const checkBoxStyle =
  "appearance-none checked:bg-blue-600 checked:border-transparent rounded mx-2";
const submitStyle =
  "m-auto shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded";

function AddEvent() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className="flex justify-center p-8">
      <form className="w-full container" onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/6">
            <label className={labelStyle} htmlFor="date">
              Date
            </label>
          </div>
          <div className="md:w-5/6">
            <DayPickerInput inputProps={{ id: "date" }} ref={register} />
          </div>
        </div>
        <div className="md:items-center mb-6">
          <div className="w-full">
            <label className={labelStyle} htmlFor="inline-password">
              Location
            </label>
          </div>
          <div className="w-full h-96">
            <AddEventMap />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/6">
            <label className={labelStyle} htmlFor="animals">
              Animals Stranded
            </label>
          </div>
          <div className="md:w-5/6">
            <textarea className={inputTextBoxStyle} id="animals" rows="5" ref={register} />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/6">
            <label className={labelStyle} htmlFor="died">
              Died
            </label>
          </div>
          <div className="md:w-5/6">
            <input className={inputTextBoxStyle} id="died" type="number" ref={register} />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/6">
            <label className={labelStyle} htmlFor="investigation">
              Investigation Details
            </label>
          </div>
          <div className="md:w-5/6">
            <textarea
              className={inputTextBoxStyle}
              id="investigation"
              rows="5"
              ref={register}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/6">
            <label className={labelStyle} htmlFor="investigation_results">
              Investigation Results
            </label>
          </div>
          <div className="md:w-5/6">
            <fieldset id="investigation_results" className="flex flex-wrap">
              <label className="px-3">
                <input
                  className={checkBoxStyle}
                  type="checkbox"
                  value="Unknown"
                  ref={register}
                />
                Unknown
              </label>
              <label className="px-3">
                <input
                  className={checkBoxStyle}
                  type="checkbox"
                  value="Pending"
                  ref={register}
                />
                Pending
              </label>
              <label className="px-3">
                <input
                  className={checkBoxStyle}
                  type="checkbox"
                  value="Disease"
                  ref={register}
                />
                Disease
              </label>
              <label className="px-3">
                <input
                  className={checkBoxStyle}
                  type="checkbox"
                  value="Pollution"
                  ref={register}
                />
                Pollution
              </label>
              <label className="px-3">
                <input
                  className={checkBoxStyle}
                  type="checkbox"
                  value="Vessel Strike"
                  ref={register}
                />
                Vessel Strike
              </label>
              <label className="px-3">
                <input
                  className={checkBoxStyle}
                  type="checkbox"
                  value="Bycatch"
                  ref={register}
                />
                Bycatch
              </label>
              <label className="px-3">
                <input
                  className={checkBoxStyle}
                  type="checkbox"
                  value="Entanglement"
                  ref={register}
                />
                Entanglement
              </label>
              <label className="px-3">
                <input
                  className={checkBoxStyle}
                  type="checkbox"
                  value="Sonar"
                  ref={register}
                />
                Sonar
              </label>
              <label className="px-3">
                <input
                  className={checkBoxStyle}
                  type="checkbox"
                  value="Other"
                  ref={register}
                />
                Other
              </label>
            </fieldset>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/6">
            <label className={labelStyle} htmlFor="references">
              References
            </label>
          </div>
          <div className="md:w-5/6">
            <textarea className={inputTextBoxStyle} id="references" rows="5" ref={register}/>
          </div>
        </div>
        <div className="flex">
          <button className={submitStyle} type="button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEvent;
