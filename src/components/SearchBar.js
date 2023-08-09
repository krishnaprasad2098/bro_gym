import { React, useState } from "react";
import exercisedetail from "../data/details.json";

const SearchBar = () => {
  const [searchExercise, setSearchExercise] = useState("");
  return (
    <div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Enter Exercise"
          className="px-2 w-6/12 placeholder-gray-700 outline-none bg-slate-300 rounded-sm"
          onChange={(event) => {
            setSearchExercise(event.target.value);
          }}
        ></input>
        {/* passing data props */}
        <button
          type="submit"
          className=" w-20 outline-none p-1 rounded-r bg-slate-700 text-white  lg:bg-red-500"
        >
          Search
        </button>
      </div>

      <div className="text-black bg-slate-50 mt-2 ">
        {exercisedetail
          .filter((val) => {
            if (searchExercise == "") {
              return "";
            } else if (
              val.name.toLowerCase().includes(searchExercise.toLowerCase())
            ) {
              return val;
            }
          })
          .map((value, key) => {
            return (
              <a className="" href={value.detaillink} target="_blank">
                <p className=" text-center">{value.name}</p>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default SearchBar;
