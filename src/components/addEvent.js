import React from "react";
import ReactDatePicker from "react-datepicker";
import AddEventMap from "./addEventMap";
import { Controller, useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const labelStyle =
  "block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4";
const inputTextBoxStyle =
  "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline";
const checkBoxStyle =
  "appearance-none checked:bg-blue-600 checked:border-transparent rounded mx-2";
const submitStyle =
  "m-auto shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded";
const labelRowStyle = "md:flex md:items-center mb-6";
/*Database schema:
  Id            int       `json:"id"`
	Date          time.Time `json:"date"`
	Regions       *[]string `json:"regions"`
	AnimalType    *[]string `json:"animal_type"`
	Died          int       `json:"died"`
	Investigation *string   `json:"investigation_type"`
	Causes        *[]string `json:"causes"`
	Pos           position  `json:"position"`
*/

function AddEvent() {
  const onSubmit = (data) => {
    data.date = data.date.toISOString();
    data.causes = [];
    if (data.investigation_result_unknown) {
      data.causes.push(data.investigation_result_unknown);
    }
    delete data.investigation_result_unknown;
    if (data.investigation_result_pending) {
      data.causes.push(data.investigation_result_pending);
    }
    delete data.investigation_result_pending;
    if (data.investigation_result_disease) {
      data.causes.push(data.investigation_result_disease);
    }
    delete data.investigation_result_disease;
    if (data.investigation_result_pollution) {
      data.causes.push(data.investigation_result_pollution);
    }
    delete data.investigation_result_pollution;
    if (data.investigation_result_vessel) {
      data.causes.push(data.investigation_result_vessel);
    }
    delete data.investigation_result_vessel;
    if (data.investigation_result_bycatch) {
      data.causes.push(data.investigation_result_bycatch);
    }
    delete data.investigation_result_bycatch;
    if (data.investigation_result_entanglement) {
      data.causes.push(data.investigation_result_entanglement);
    }
    delete data.investigation_result_entanglement;
    if (data.investigation_result_sonar) {
      data.causes.push(data.investigation_result_sonar);
    }
    delete data.investigation_result_sonar;
    if (data.investigation_result_other) {
      data.causes.push(data.other);
    }
    delete data.investigation_result_other;
    delete data.other;

    // regions??

    console.log(data);
    const url = new URL("https://api.marinestrandings.com/event");
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      body: JSON.stringify(data),
    })
      .then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
      })
      .catch((error) => console.log(error));
  };
  const { register, handleSubmit, control } = useForm();
  const [otherVisible, setOtherVisible] = useState(false);
  return (
    <div className="flex justify-center p-8">
      <form className="w-full container" onSubmit={handleSubmit(onSubmit)}>
        <div className={labelRowStyle}>
          <div className="md:w-1/6">
            <label className={labelStyle} htmlFor="date">
              Date
            </label>
          </div>
          <div className="md:w-5/6">
            <Controller
              control={control}
              name="date"
              render={({ field }) => (
                <ReactDatePicker
                  className="input"
                  placeholderText="Select stranding date"
                  onChange={(e) => field.onChange(e)}
                  selected={field.value}
                />
              )}
            />
          </div>
        </div>
        <div className="md:items-center mb-6">
          <div className="w-full">
            <label className={labelStyle}>Location</label>
          </div>
          <div className="w-full h-96">
            <AddEventMap />
          </div>
        </div>
        <div className={labelRowStyle}>
          <div className="md:w-1/6">
            <label className={labelStyle} htmlFor="animals">
              Animals Stranded
            </label>
          </div>
          <div className="md:w-5/6">
            <textarea
              className={inputTextBoxStyle}
              id="animals"
              rows="5"
              {...register("animal_type", { required: true })}
            />
          </div>
        </div>
        <div className={labelRowStyle}>
          <div className="md:w-1/6">
            <label className={labelStyle} htmlFor="died">
              Number dead
            </label>
          </div>
          <div className="md:w-5/6">
            <input
              className={inputTextBoxStyle}
              id="died"
              type="number"
              {...register("died", { required: true })}
            />
          </div>
        </div>
        <div className={labelRowStyle}>
          <div className="md:w-1/6">
            <label className={labelStyle} htmlFor="investigation_type">
              Investigation Type
            </label>
          </div>
          <div className="md:w-5/6">
            <input
              className={inputTextBoxStyle}
              id="investigation_type"
              type="text"
              {...register("investigation_type", { required: true })}
            />
          </div>
        </div>
        <div className={labelRowStyle}>
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
              {...register("investigation")}
            />
          </div>
        </div>
        <div className={labelRowStyle}>
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
                  {...register("investigation_result_unknown")}
                />
                Unknown
              </label>
              <label className="px-3">
                <input
                  className={checkBoxStyle}
                  type="checkbox"
                  value="Pending"
                  {...register("investigation_result_pending")}
                />
                Pending
              </label>
              <label className="px-3">
                <input
                  className={checkBoxStyle}
                  type="checkbox"
                  value="Disease"
                  {...register("investigation_result_disease")}
                />
                Disease
              </label>
              <label className="px-3">
                <input
                  className={checkBoxStyle}
                  type="checkbox"
                  value="Pollution"
                  {...register("investigation_result_pollution")}
                />
                Pollution
              </label>
              <label className="px-3">
                <input
                  className={checkBoxStyle}
                  type="checkbox"
                  value="Vessel Strike"
                  {...register("investigation_result_vessel")}
                />
                Vessel Strike
              </label>
              <label className="px-3">
                <input
                  className={checkBoxStyle}
                  type="checkbox"
                  value="Bycatch"
                  {...register("investigation_result_bycatch")}
                />
                Bycatch
              </label>
              <label className="px-3">
                <input
                  className={checkBoxStyle}
                  type="checkbox"
                  value="Entanglement"
                  {...register("investigation_result_entanglement")}
                />
                Entanglement
              </label>
              <label className="px-3">
                <input
                  className={checkBoxStyle}
                  type="checkbox"
                  value="Sonar"
                  {...register("investigation_result_sonar")}
                />
                Sonar
              </label>
              <label className="px-3">
                <input
                  className={checkBoxStyle}
                  type="checkbox"
                  value="Other"
                  {...register("investigation_result_other")}
                  onChange={(e) => {
                    setOtherVisible(e.target.checked);
                  }}
                />
                Other
              </label>
            </fieldset>
          </div>
        </div>
        <div
          className={otherVisible ? labelRowStyle : labelRowStyle + " hidden"}
        >
          <div className="md:w-1/6">
            <label
              className={otherVisible ? labelStyle : labelStyle + " hidden"}
              htmlFor="other"
            >
              Other
            </label>
          </div>
          <div className="md:w-5/6">
            <input
              className={
                otherVisible ? inputTextBoxStyle : inputTextBoxStyle + " hidden"
              }
              id="other"
              type="text"
              {...register("other")}
            />
          </div>
        </div>
        <div className={labelRowStyle}>
          <div className="md:w-1/6">
            <label className={labelStyle} htmlFor="references">
              References
            </label>
          </div>
          <div className="md:w-5/6">
            <textarea
              className={inputTextBoxStyle}
              id="references"
              rows="5"
              {...register("references")}
            />
          </div>
        </div>
        <div className="flex">
          <input className={submitStyle} type="submit" />
        </div>
      </form>
    </div>
  );
}

export default AddEvent;
